import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-add-cohort',
  templateUrl: './add-cohort.component.html',
  styleUrls: ['./add-cohort.component.css'],
  providers: [ApiService]
})
export class AddCohortComponent implements OnInit {
  
  cohort;
  cohorts = [];
  cohort_name;
  constructor(private api:ApiService){
    this.RegisterCohort();
  }

  RegisterCohort = () => {
    this.api.RegisterCohort(this.cohort).subscribe(
      data => {
        this.cohorts.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
  }

}
