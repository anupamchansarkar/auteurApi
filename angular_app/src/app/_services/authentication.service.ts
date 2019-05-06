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

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  "Basic NzExNjFlZjQ4ZmYyNjA5NWJhMTAzNDFhNjY0MDkyOGY6MTAxNjJjOTU4NTM5Njc1MzI5M2EzMzczYjJjYmM5ZjU="});

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const body = {scope: '*', grant_type: 'password', email: username, password: password};
        return this.http.post<any>(`${environment.apiUrl}/authentication/token`, body, {headers:this.headers});
    }

    get_user(data: any) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + data.access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/user`, {headers:localheaders})
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