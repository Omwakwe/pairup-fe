import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; 
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [ApiService, AdminService]
})
export class AdminLoginComponent implements OnInit {

  admindata;
  error: any;

  constructor(private api:ApiService, private router:Router, private adminService: AdminService){   
  }

  ngOnInit(){
    this.admindata = {
      email: '', password: ''
    };
  }
  
  // loginAdmin = () => {
  //   this.api.loginAdmin(this.admindata).subscribe(
  //     data => {
  //       console.log(data)
  //       localStorage.setItem('token', data.access)
  //       this.router.navigate(['/admin/dashboard'])
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

  adminLogin(email: string, password: string) {
    this.adminService.adminLogin(email, password).subscribe(
      success => this.router.navigate(['/admin/dashboard']),
      error => this.error = error
    );
  }
}
