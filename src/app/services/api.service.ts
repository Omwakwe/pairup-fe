import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "https://pair-app-v1.herokuapp.com";
  cohorturl = "https://pair-app-v1.herokuapp.com/cohorts/";
  mentorurl = "https://pair-app-v1.herokuapp.com/mentors/"
  studenturl = "https://pair-app-v1.herokuapp.com/students/"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllCohorts(): Observable<any>{
    return this.http.get(this.baseurl + '/cohorts/',
    {headers: this.httpHeaders})
  }

  RegisterCohort(cohort): Observable<any>{
    return this.http.post<any>(this.cohorturl, cohort, {headers: this.httpHeaders});
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

