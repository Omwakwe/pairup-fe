import { Component, OnInit } from '@angular/core';
import {  AllStudentsService } from "../../../services/all-students.service";

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  providers: [AllStudentsService]
})
export class AllStudentsComponent implements OnInit {

  students = [];

  getAllStudents = () => {
    this.api.getAllStudents().subscribe(
      data => {
        this.students = data;
        console.log(this.students)
      },
      error => {
        console.log(error);
      }
    )
  }

  constructor(private api:AllStudentsService){
    this.getAllStudents();
    
  }

  ngOnInit(): void {
  }

}