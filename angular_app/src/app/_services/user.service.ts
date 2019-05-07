import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    saved_script: any;

    constructor(private http: HttpClient) { }
     basicheaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  "Basic NzExNjFlZjQ4ZmYyNjA5NWJhMTAzNDFhNjY0MDkyOGY6MTAxNjJjOTU4NTM5Njc1MzI5M2EzMzczYjJjYmM5ZjU="});

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/user`);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/authentication/register`, user, {headers: this.basicheaders});
    }

    get_folders(id: string, access_token: string) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/folder/${id}`, {headers:localheaders});
    }

    save_script(script: any) {
        this.saved_script = script;
    }

    get_saved_script() {
        return this.saved_script;
    }

    get_script_details(id: string, access_token: string) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/script/${id}/details`, {headers:localheaders});
    }
}