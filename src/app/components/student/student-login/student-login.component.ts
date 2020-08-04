import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; 
import { Router } from '@angular/router';
import {  StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
  providers: [ApiService, StudentService]
})
export class StudentLoginComponent implements OnInit {

  studentdata;
  error: any;

  constructor(private api:ApiService, private router:Router, private studentService: StudentService) { }

  ngOnInit(){
    this.studentdata = {
      email: '', password: ''
    };
  }

  studentLogin(email: string, password: string) {
    this.studentService.studentLogin(email, password).subscribe(
      success => this.router.navigate(['/student/dashboard']),
      error => this.error = error
    );
  }
}
