import { Component, OnInit } from '@angular/core';
import { AllMentorsService } from "../../../services/all-mentors.service";

@Component({
  selector: 'app-all-mentors',
  templateUrl: './all-mentors.component.html',
  styleUrls: ['./all-mentors.component.css'],
  providers: [AllMentorsService]
})
export class AllMentorsComponent implements OnInit {


  mentors = [];

  getAllMentors = () => {
    this.api.getAllMentors().subscribe(
      data => {
        this.mentors = data;
        console.log(this.mentors)
      },
      error => {
        console.log(error);
      }
    )
  }

  constructor(private api:AllMentorsService){
    this.getAllMentors();
    
  }

  ngOnInit(): void {
  }

}