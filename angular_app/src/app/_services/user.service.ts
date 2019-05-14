import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getFolders(id: string, access_token: string) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/folder/${id}`, {headers:localheaders});
    }

    getScriptDetails(id: string, access_token: string) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/script/${id}/details`, {headers:localheaders});
    }
}