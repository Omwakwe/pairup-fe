import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student/student.service';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';
import { PairupService } from 'src/app/services/pairup/pairup.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  providers: [StudentService, PairupService]
})
export class StudentDashboardComponent implements OnInit {

  student;
  myToken;
  id;
  myPayload;
  returned_data;
  getToken(){
    return localStorage.getItem('token')
  }

  getStudent = (id) => {
    this.myToken = localStorage.getItem('token');
    this.studentService.getStudent(id).subscribe(
      data => {
        this.student = data;
        console.log("Gotten admin")
        console.log(this.student.id)
      },
      error => {
        console.log(error);
      }
    )
  }
  GetStudentPair = () => {    
    // var body = "cohort_id=" + this.student.user_id;
    var body = "student_id=" + this.student.id;

    console.log("MY DATA", body)
    this.pairupService.GetStudentPair(body).subscribe({
      next: (data) => {
        this.returned_data = data.data;
        console.log("STUDENT PAIR")
        console.log(this.returned_data)
      },
      error: (err) => {
        // alert(err)
      },
  });

}
  constructor(private studentService:StudentService, private router: Router, private pairupService:PairupService) { 
    this.student ={
      last_name: '', first_name: '', email: ''
    };
    this.myToken = this.getToken();    
    this.myPayload = <JWTPayload> jwtDecode(this.myToken);
    // console.log("student payload")
    // console.log(this.myPayload.cohort)
    // this.id = this.myPayload.user_id;
    this.getStudent(this.id);
  }

  ngOnInit() {
    this.GetStudentPair();
  }

}
interface JWTPayload {
  user_id: number;
  email: string;
  exp: number;
  role: string;
  token_type: string;
  cohort: string;
  jti: string;
  bio: string;
  phone: string;
}
