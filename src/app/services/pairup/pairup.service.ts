import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PairupService {
  private pairurl = "https://pair-app-v1.herokuapp.com/pair/";
  private historyurl = "https://pair-app-v1.herokuapp.com/pair_history/";
  private studenturl = "https://pair-app-v1.herokuapp.com/student_pair/";

  constructor(private http: HttpClient) { }

  // httpHeaders = new HttpHeaders({'Content-Type': 'multipart/form-data'})
  httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})

  GeneratePairs(data): Observable<any>{
    console.log("OUTGOING DATA", data)
    return this.http.post<any>(this.pairurl, data, {headers: this.httpHeaders});
  }

  GenerateHistory(data): Observable<any>{
    console.log("OUTGOING DATA", data)
    return this.http.post<any>(this.historyurl, data, {headers: this.httpHeaders});
  }

  GetStudentPair(data): Observable<any>{
    console.log("OUTGOING DATA", data)
    return this.http.post<any>(this.studenturl, data, {headers: this.httpHeaders});
  }
}
