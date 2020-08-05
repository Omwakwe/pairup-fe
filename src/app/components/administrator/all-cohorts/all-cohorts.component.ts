import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; 
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-all-cohorts',
  templateUrl: './all-cohorts.component.html',
  styleUrls: ['./all-cohorts.component.css'],
  providers: [ApiService, AdminService]
})
export class AllCohortsComponent implements OnInit {

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

  constructor(private api:ApiService, private adminService: AdminService){
    this.getAllCohorts();    
  }

  ngOnInit(): void {
  }

}
