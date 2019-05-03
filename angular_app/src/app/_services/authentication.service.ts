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


    get_user(_data: any) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + _data.access_token
        })
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/user`, {headers:localheaders})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
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