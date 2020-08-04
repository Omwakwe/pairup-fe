import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../../services/mentor/mentor.service';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.css']
})
export class MentorDashboardComponent implements OnInit {

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

  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

}
