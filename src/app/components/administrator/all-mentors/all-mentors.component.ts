import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { AdminService } from '../../../services/admin/admin.service'; 

@Component({
  selector: 'app-all-mentors',
  templateUrl: './all-mentors.component.html',
  styleUrls: ['./all-mentors.component.css'],
  providers: [AdminService]
})
export class AllMentorsComponent implements OnInit {
  
  mentors = [];

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

  constructor(private adminService:AdminService){
    this.getAllMentors();
    
  }

  ngOnInit(): void {
  }

}