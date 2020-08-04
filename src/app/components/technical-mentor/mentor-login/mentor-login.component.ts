import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; 
import { Router } from '@angular/router';
import { MentorService } from '../../../services/mentor/mentor.service';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css'],
  providers: [ApiService, MentorService]
})
export class MentorLoginComponent implements OnInit {


  mentordata;
  error: any;

  constructor(private api:ApiService, private router:Router, private mentorService: MentorService) { }

  ngOnInit(){
    this.mentordata = {
      email: '', password: ''
    };
  }

  mentorLogin(email: string, password: string) {
    this.mentorService.mentorLogin(email, password).subscribe(
      success => this.router.navigate(['/technical-mentor/dashboard']),
      error => this.error = error
    );
  }
}
