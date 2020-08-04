import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-add-cohort',
  templateUrl: './add-cohort.component.html',
  styleUrls: ['./add-cohort.component.css'],
  providers: [AdminService]
})
export class AddCohortComponent implements OnInit {

  cohort;
  returned_cohort;
  errorMessage = 'Error when creating cohort'
  constructor(private adminService:AdminService){
    this.RegisterCohort();
  }
  ngOnInit() {
    this.cohort ={
      cohort_name: ''
    };
  }

  RegisterCohort = () => {
    this.adminService.RegisterCohort(this.cohort).subscribe({
      next: (data) => {
        this.returned_cohort = data;
        alert('Cohort ' + this.returned_cohort.cohort_name + ' has been created')
      },
      error: (err) => {
        (this.errorMessage = err);
      },
  });
}
}