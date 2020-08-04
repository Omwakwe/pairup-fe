import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; 
import { AdminService } from '../../services/admin/admin.service';

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

  get token(): string {
    return localStorage.getItem('token');
  }

  adminLogout(){
    this.adminService.adminLogout()
  }
  
  getAdmin = (id) => {
    this.api.getAdmin(id).subscribe(
      data => {
        this.admin = data;
        console.log(this.admin)
      },
      error => {
        console.log(error);
      }
    )
  }
  
  constructor(private api:ApiService, private adminService: AdminService){
    // this.getAllAdmins();
    this.getAdmin(this.id);
    this.admin ={
      last_name: '', first_name: '', email: ''
    };
  }

  ngOnInit(){
    this.adminLogout()
  }

}