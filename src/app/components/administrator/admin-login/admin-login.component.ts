import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [ApiService]
})
export class AdminLoginComponent implements OnInit {

  admindata;

  constructor(private api:ApiService, private router:Router){
    this.loginAdmin();    
  }

  ngOnInit(){
    this.admindata = {
      email: '', password: ''
    };
  }
  
  loginAdmin = () => {
    this.api.loginAdmin(this.admindata).subscribe(
      data => {
        console.log(data)
        localStorage.setItem('token', data.access)
        this.router.navigate(['/admin/dashboard'])
      },
      error => {
        console.log(error);
      }
    )
  }

}
