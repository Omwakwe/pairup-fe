import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student/student.service';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  student;
  myToken;
  id; 
  myPayload;

  getToken(){
    return localStorage.getItem('token')
  }

  ngOnInit(): void {
  }

  getStudent = (id) => {
    this.myToken = localStorage.getItem('token');
    this.studentService.getStudent(id).subscribe(
      data => {
        this.student = data;
        console.log("Gotten admin")
        console.log(this.student)
      },
      error => {
        console.log(error);
      }
    )
  }

  constructor(private studentService:StudentService) { 
    this.student ={
      last_name: '', first_name: '', email: ''
    };
    this.myToken = this.getToken();    
    this.myPayload = <JWTPayload> jwtDecode(this.myToken);
    this.id = this.myPayload.user_id;
    this.getStudent(this.id);
  }

}

interface JWTPayload {
  user_id: number;
  email: string;
  exp: number;
  role: string;
  token_type: string;
  jti: string;
  bio: string;
  phone: string;
}