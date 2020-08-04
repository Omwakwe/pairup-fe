import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; 
import { AdminService } from '../../services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers: [ApiService, AdminService]
})

export class AdministratorComponent implements OnInit {
  admins = [];
  admin;
  id = 1;
  myToken; 
  get token(): string {
    return localStorage.getItem('token');
  }

  adminLogout(){
    console.log("logged out")
    this.adminService.adminLogout()
    this.router.navigate(['/login']);
  }
  
  getAdmin = (id) => {
    this.myToken = localStorage.getItem('token');
    console.log("MyToken1")
    console.log(this.myToken)
    this.api.getAdmin(id).subscribe(
      data => {
        this.admin = data;
        console.log(this.admin)
        console.log("MyToken2")
        console.log(this.myToken)
      },
      error => {
        console.log(error);
      }
    )
  }
  
  constructor(private api:ApiService, private adminService: AdminService, private router: Router){
    // this.getAllAdmins();
    this.getAdmin(this.id);
    this.admin ={
      last_name: '', first_name: '', email: ''
    };
  }

  ngOnInit(){
    // this.adminLogout()
  }

}