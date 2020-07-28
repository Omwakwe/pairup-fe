import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "https://pair-app-v1.herokuapp.com/api/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllCohorts(): Observable<any>{
    return this.http.get(this.baseurl + 'cohorts/cohorts',
    {headers: this.httpHeaders})
  }
  RegisterCohort(cohort): Observable<any>{
    const body = {cohort_name: cohort.cohort_name};
    return this.http.post(this.baseurl + 'cohorts/cohorts', 
    body,
    {headers: this.httpHeaders});
  }
}
