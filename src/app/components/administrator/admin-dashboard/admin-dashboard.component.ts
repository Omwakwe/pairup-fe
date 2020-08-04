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

  lengthCohorts = this.cohorts.length
  constructor(private adminService: AdminService){
    
  }

  ngOnInit(){
    this.getAllCohorts();
  }
}
