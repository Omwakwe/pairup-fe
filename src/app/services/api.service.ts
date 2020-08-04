import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  // adminurl = "https://pair-app-v1.herokuapp.com/admins/";
  adminurl = "https://pair-app-v1.herokuapp.com/admins/"
  singleadmin = "https://pair-app-v1.herokuapp.com/admins/"
  adminloginurl = "https://pair-app-v1.herokuapp.com/auth/jwt/token/";


  baseurl = "https://pair-app-v1.herokuapp.com";
  cohorturl = "https://pair-app-v1.herokuapp.com/cohorts/";
  mentorurl = "https://pair-app-v1.herokuapp.com/mentors/"
  studenturl = "https://pair-app-v1.herokuapp.com/students/"

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

  getAdmin(id): Observable<any>{
    return this.http.get(this.singleadmin + id + "/",
    {headers: this.httpHeaders})
  }
  
  loginAdmin(user): Observable<any>{
    return this.http.post<any>(this.adminloginurl, user, {headers: this.httpHeaders});
  }

  adminLoggedIn(){
    return !!localStorage.getItem('token')
  }

  studentLoggedIn(){
    return !!localStorage.getItem('token')
  }

  mentorLoggedIn(){
    return !!localStorage.getItem('token')
  }


  getToken(){
    return localStorage.getItem('token')
  }

  getAllMentors(): Observable<any>{
    return this.http.get(this.baseurl + '/mentors/',
    {headers: this.httpHeaders})
  }

  RegisterMentor(mentor): Observable<any>{
    return this.http.post<any>(this.mentorurl, mentor, {headers: this.httpHeaders});
  }

  getAllStudents(): Observable<any>{
    return this.http.get(this.baseurl + '/students/',
    {headers: this.httpHeaders})
  }

  RegisterStudent(student): Observable<any>{
    return this.http.post<any>(this.studenturl, student, {headers: this.httpHeaders});
  }
  
}

