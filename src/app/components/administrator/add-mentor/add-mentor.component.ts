import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css'],
  providers: [AdminService]
})
export class AddMentorComponent implements OnInit {

  mentor;
  returned_mentor;
  cohorts = [];

  errorMessage = 'Error when creating mentor'
  constructor(private adminService:AdminService){
    this.getAllCohorts();
  }

  ngOnInit() {
    this.mentor ={
      email: '',
      first_name: '',
      last_name: '',
      user_name: '',
      cohort: Number,
      bio: '',
      phone: '',
    };
  }

  RegisterMentor = () => {
    this.adminService.RegisterMentor(this.mentor).subscribe({
      next: (data) => {
        this.returned_mentor = data;
        alert('Mentor ' + this.returned_mentor.first_name + ' has been created')
      },
      error: (err) => {
        (this.errorMessage = err);
        // alert(this.errorMessage[0])
        alert("Error when creating student. Please check that all data provided is provided and is correct.")
      },
  });
}

getAllCohorts = () => {
  this.adminService.getAllCohorts().subscribe(
    data => {
      this.cohorts = data;
      console.log(this.cohorts)
    },
    error => {
      console.log(error);
    }
  )
}
}
