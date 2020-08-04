import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AdminService],
})
export class LoginComponent implements OnInit {

  admindata;
  error: any;
  
  constructor(private router:Router, private adminService: AdminService) { }

  ngOnInit(){
    this.admindata = {
      email: '', password: ''
    };
  }

  adminLogin(email: string, password: string) {
    this.adminService.adminLogin(email, password).subscribe(
      success => this.router.navigate(['/admin/dashboard']),
      error => this.error = error
    );
  }

}
