import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllMentorsService {

  baseurl = "https://pair-app-v1.herokuapp.com/api/";
  mentorurl = "https://pair-app-v1.herokuapp.com/api/account/mentors/"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  constructor(private http: HttpClient) { }

  getAllMentors(): Observable<any>{
    return this.http.get(this.baseurl + 'account/mentors/',
    {headers: this.httpHeaders})
  }

  RegisterMentor(mentor): Observable<any>{
    return this.http.post<any>(this.mentorurl, mentor, {headers: this.httpHeaders});
  }
}
