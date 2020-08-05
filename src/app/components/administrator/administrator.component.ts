import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; 
import { AdminService } from '../../services/admin/admin.service';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers: [ApiService, AdminService]
})

export class AdministratorComponent implements OnInit {
  admins = [];
  admin;
  id;
  myToken; 
  myPayload;

  getToken(){
    return localStorage.getItem('token')
  }

  adminLogout(){
    this.adminService.adminLogout()
    this.router.navigate(['/home']);
  }
  
  getAdmin = (id) => {
    this.myToken = localStorage.getItem('token');
    this.adminService.getAdmin(id).subscribe(
      data => {
        this.admin = data;
        console.log("Gotten admin")
        console.log(this.admin)
      },
      error => {
        console.log(error);
      }
    )
  }
  
  constructor(private api:ApiService, private adminService: AdminService, private router: Router){
    this.admin ={
      last_name: '', first_name: '', email: ''
    };
    this.myToken = this.getToken();
    
    this.myPayload = <JWTPayload> jwtDecode(this.myToken);
    this.id = this.myPayload.user_id;
    this.getAdmin(this.id);
  }

  ngOnInit(){}

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