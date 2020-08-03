import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; 

@Component({
  selector: 'app-all-mentors',
  templateUrl: './all-mentors.component.html',
  styleUrls: ['./all-mentors.component.css'],
  providers: [ApiService]
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

  constructor(private api:ApiService){
    this.getAllMentors();
    
  }

  ngOnInit(): void {
  }

}