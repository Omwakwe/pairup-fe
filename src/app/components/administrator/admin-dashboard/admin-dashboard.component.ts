import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { AllCohortsComponent } from '../all-cohorts/all-cohorts.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  cohorts = [];
  mentors = [];
  students = [];

  getAllCohorts = () => {
    this.adminService.getAllCohorts().subscribe(
      data => {
        this.cohorts = data;
        console.log(this.cohorts)
      },
      error => {
        console.log(error);
      }
    )
  }

  getAllMentors = () => {
    this.adminService.getAllMentors().subscribe(
      data => {
        this.mentors = data;
        console.log(this.mentors)
      },
      error => {
        console.log(error);
      }
    )
  }

  getAllStudents = () => {
    this.adminService.getAllStudents().subscribe(
      data => {
        this.students = data;
        console.log(this.students)
      },
      error => {
        console.log(error);
      }
    )
  }
  constructor(private adminService: AdminService){
    
  }

  ngOnInit(){
    this.getAllCohorts();
    this.getAllMentors();
    this.getAllStudents();
  }
}
