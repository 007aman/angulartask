import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  getApi(url: string): any {
    return this.http.get<any>(environment.api + url);
  }
  postApi(url: string, data: object): any {
    return this.http.post<any>(environment.api + url, data);
  }
  deleteApi(url: string, data: any): any {
    return this.http.delete<any>(environment.api + url + '/'+ data.id);
  }
}
