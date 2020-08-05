import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor/mentor.service';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-technical-mentor',
  templateUrl: './technical-mentor.component.html',
  styleUrls: ['./technical-mentor.component.css'],
  providers: [MentorService]
})
export class TechnicalMentorComponent implements OnInit {

  mentor;
  id;
  myToken; 
  myPayload;

  getToken(){
    return localStorage.getItem('token')
  }

  mentorLogout(){
    this.mentorService.mentorLogout()
    this.router.navigate(['/home']);
  }

  getMentor = (id) => {
    this.myToken = localStorage.getItem('token');
    this.mentorService.getMentor(id).subscribe(
      data => {
        this.mentor = data;
        console.log("Gotten mentor")
        console.log(this.mentor)
      },
      error => {
        console.log(error);
      }
    )
  }

  constructor(private mentorService: MentorService, private router: Router) { 
    this.mentor={
      last_name: '', first_name: '', email: ''
    };
    this.myToken = this.getToken();
    
    this.myPayload = <JWTPayload> jwtDecode(this.myToken);
    this.id = this.myPayload.user_id;
    this.getMentor(this.id);
  }

  ngOnInit(): void {
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
