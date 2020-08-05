import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PairupService {

  private pairurl = "https://pair-app-v1.herokuapp.com";
  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  GeneratePairs(data): Observable<any>{
    return this.http.post<any>(this.pairurl, data, {headers: this.httpHeaders});
  }
  
}
