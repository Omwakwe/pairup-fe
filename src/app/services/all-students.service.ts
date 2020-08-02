import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllStudentsService {
  baseurl = "https://pair-app-v1.herokuapp.com";
  studenturl = "https://pair-app-v1.herokuapp.com/students"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any>{
    return this.http.get(this.baseurl + '/students/',
    {headers: this.httpHeaders})
  }

  RegisterStudents(student): Observable<any>{
    return this.http.post<any>(this.studenturl, student, {headers: this.httpHeaders});
  }


}
