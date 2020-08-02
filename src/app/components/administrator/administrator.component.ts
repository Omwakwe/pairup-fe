import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; 

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers: [ApiService]
})

export class AdministratorComponent implements OnInit {
  admins = [];

  getAllAdmins = () => {
    this.api.getAllAdmins().subscribe(
      data => {
        this.admins = data;
        console.log(this.admins)
      },
      error => {
        console.log(error);
      }
    )
  }
  
  constructor(private api:ApiService){
    this.getAllAdmins();
    
  }

  ngOnInit(): void {
  }

}
