import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "https://pair-app-v1.herokuapp.com/api/";
  cohorturl = "https://pair-app-v1.herokuapp.com/cohorts/";
  adminurl = "https://pair-app-v1.herokuapp.com/admins/";
  adminloginurl = "https://pair-app-v1.herokuapp.com/auth/jwt/token/";

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllCohorts(): Observable<any>{
    return this.http.get(this.cohorturl,
    {headers: this.httpHeaders})
  }

  RegisterCohort(cohort): Observable<any>{
    return this.http.post<any>(this.cohorturl, cohort, {headers: this.httpHeaders});
  }

  getAllAdmins(): Observable<any>{
    return this.http.get(this.adminurl,
    {headers: this.httpHeaders})
  }
  
  loginAdmin(user): Observable<any>{
    return this.http.post<any>(this.adminloginurl, user, {headers: this.httpHeaders});
  }

  adminLoggedIn(){
    return !!localStorage.getItem('token')
  }
}
