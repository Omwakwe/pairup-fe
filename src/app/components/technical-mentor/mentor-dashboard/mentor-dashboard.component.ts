import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../../services/mentor/mentor.service';
import { AdminService } from '../../../services/admin/admin.service';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.css'],
  providers : [ MentorService, AdminService]
})
export class MentorDashboardComponent implements OnInit {

  tmStudents = [];
  mentor;
  id;
  cohortId;
  myToken; 
  myPayload;
  cohort;

  getToken(){
    return localStorage.getItem('token')
  }

  getMentor = (id) => {
    this.myToken = localStorage.getItem('token');
    this.mentorService.getMentor(id).subscribe(
      data => {
        this.mentor = data;
        this.cohortId = this.mentor.cohort;
      },
      error => {
        console.log(error);
      }
    )
  }

  getCohort = (cohortId) => {
    this.adminService.getCohort(cohortId).subscribe(
      data => {
        this.cohort = data;
        console.log("Gotten Cohort")
        console.log(this.cohort)
      },
      error => {
        console.log(error);
      }
    )
  }

  getAllStudents = () => {
    this.mentorService.getAllStudents().subscribe(
      data => {
        this.tmStudents = data;
        console.log(this.tmStudents)
      },
      error => {
        console.log(error);
      }
    )
  }

  constructor(private mentorService: MentorService, private router: Router, private adminService: AdminService) { 
    this.mentor={
      last_name: '', first_name: '', email: ''
    };
    this.cohort={
      cohort_name: ''
    }
    
    
  }

  ngOnInit(): void {
    this.getAllStudents();
    this.myToken = this.getToken();
    this.myPayload = <JWTPayload> jwtDecode(this.myToken);
    this.id = this.myPayload.user_id;
    this.getMentor(this.id);
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