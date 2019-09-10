import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    data : any;
    checkservice: any;
    constructor(private http: HttpClient) { }

    getFolders(id: string, access_token: string) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/folder/${id}`, {headers:localheaders});
    }

    getGenreList(access_token: string) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/genre`, {headers:localheaders});
    }

    getScriptDetails(id: string, access_token: string) {
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        return this.http.get<any>(`${environment.apiUrl}/script/${id}/details`, {headers:localheaders});
    }

    postFile(fileToUpload: File, access_token: string, genreValue: string){
        let localheaders = new HttpHeaders({
            'Authorization':  "Bearer " + access_token
        });
        const endpoint = `${environment.apiUrl}/script`;
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append('genre', genreValue);
        return this.http
          .post(endpoint, formData, { headers: localheaders })
          .map(response => {  
            this.data = response;                            
            this.checkservice=true;
            return true;
         })
         .catch(error => {
            console.log(error);
            return Observable.throw(error);
         })
    }
    
}