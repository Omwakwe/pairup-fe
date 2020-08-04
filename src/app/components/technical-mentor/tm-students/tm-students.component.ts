import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/services/mentor/mentor.service'; 

@Component({
  selector: 'app-tm-students',
  templateUrl: './tm-students.component.html',
  styleUrls: ['./tm-students.component.css'],
  providers: [MentorService]

})
export class TmStudentsComponent implements OnInit {

  tmStudents = [];

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

  constructor(private mentorService:MentorService){
    this.getAllStudents();
    
  }

  ngOnInit(): void {
  }

}