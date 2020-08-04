import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; 
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  providers: [AdminService]
})
export class AllStudentsComponent implements OnInit {

  students = [];

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

  constructor(private adminService:AdminService){
    this.getAllStudents();
    
  }

  ngOnInit(): void {
  }

}