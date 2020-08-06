import { Component, OnInit } from '@angular/core';
import { PairupService } from '../../../services/pairup/pairup.service';
import { MentorService } from '../../../services/mentor/mentor.service';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-pair-history',
  templateUrl: './pair-history.component.html',
  styleUrls: ['./pair-history.component.css']
})
export class PairHistoryComponent implements OnInit {

  pairDuration;
  date; 
  returned_data = [];
  mentor;
  id;
  myToken; 
  myPayload;
  cohort;
  formData: any = new FormData();

  getToken(){
    return localStorage.getItem('token')
  }
  
 getMentor = (id) => {
  this.myToken = localStorage.getItem('token');
  this.mentorService.getMentor(id).subscribe(
    data => {
      this.mentor = data;
      console.log("MENTOR DATA", data)
    },
    error => {
      console.log(error);
    }
  )
}
  pairDate(){
    console.log("DURATION");  
    console.log(this.pairDuration);
  }

  GenerateHistory = () => {
    this.formData.append("cohort_id", this.mentor.cohort);
    this.formData.append("day_of_week", this.pairDuration);
    
    var body = "cohort_id=" + this.mentor.cohort + "&day_of_week=" + this.pairDuration;

    console.log("MY DATA", body)
    this.pairupService.GenerateHistory(body).subscribe({
      next: (data) => {
        this.returned_data = data.Data;
        console.log("STUDENT PAIRS")
        console.log(this.returned_data)
      },
      error: (err) => {
        // alert(err)
      },
  });

}

constructor(private pairupService:PairupService, private mentorService:MentorService){
  this.mentor={
    last_name: '', first_name: '', email: ''
  };
}

ngOnInit(){
  
  this.myToken = this.getToken();
  this.myPayload = <JWTPayload> jwtDecode(this.myToken);
  this.id = this.myPayload.user_id;
  this.getMentor(this.id);
}

}
interface JWTPayload {
  user_id: number;
  email: string;
  exp: number;
  role: string;
  token_type: string;
  jti: string;
  bio: string;
  phone: string;
}
