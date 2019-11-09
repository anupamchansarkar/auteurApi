import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    user : any;
    source: string;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    basicHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  "Basic NzExNjFlZjQ4ZmYyNjA5NWJhMTAzNDFhNjY0MDkyOGY6MTAxNjJjOTU4NTM5Njc1MzI5M2EzMzczYjJjYmM5ZjU="});

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    register(user1: any) {
        this.source = localStorage.getItem('source');
        console.log(this.source);
        const body = {first_name: user1.first_name, last_name: user1.last_name, email: user1.email, password: user1.password, source:this.source};
        return this.http.post(`${environment.apiUrl}/authentication/register`, body, {headers: this.basicHeaders});
    }

    login(username: string, password: string) {
        const body = {scope: '*', grant_type: 'password', email: username, password: password};
        var data = this.http.post<any>(`${environment.apiUrl}/authentication/token`, body, {headers:this.basicHeaders});
        return data;
    }

    getUser(data: any) {
        let localHeaders = new HttpHeaders({
            'Authorization':  "Bearer " + data.access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/user`, {headers:localHeaders})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && data.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    var new_user = {first_name: user.user_details.first_name, last_name: user.user_details.last_name, id: user.user_details.id, access_token:data.access_token, email:user.user_details.email, folder_details: user.folder_details};
                    localStorage.setItem('currentUser', JSON.stringify(new_user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}