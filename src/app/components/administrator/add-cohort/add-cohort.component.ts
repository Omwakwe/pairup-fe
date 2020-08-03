import { Component, OnInit } from '@angular/core';
import { AllCohortsService } from '../../../services/all-cohorts.service';

@Component({
  selector: 'app-add-cohort',
  templateUrl: './add-cohort.component.html',
  styleUrls: ['./add-cohort.component.css'],
  providers: [AllCohortsService]
})
export class AddCohortComponent implements OnInit {

  cohort;
  returned_cohort;
  errorMessage = 'Error when creating cohort'
  constructor(private api:AllCohortsService){
    this.RegisterCohort();
  }
  ngOnInit() {
    this.cohort ={
      cohort_name: ''
    };
  }

  RegisterCohort = () => {
    // alert("COHORT" + this.cohort.cohort_name)
    this.api.RegisterCohort(this.cohort).subscribe({
      next: (data) => {
        this.returned_cohort = data;
        alert('Cohort ' + this.returned_cohort.cohort_name + ' has been created')
      },
      error: (err) => {
        (this.errorMessage = err);
        // alert(err);
      },
  });
}
}