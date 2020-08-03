import { Component, OnInit } from '@angular/core';
import { AllCohortsService } from '../../../services/all-cohorts.service'; 

@Component({
  selector: 'app-all-cohorts',
  templateUrl: './all-cohorts.component.html',
  styleUrls: ['./all-cohorts.component.css'],
  providers: [AllCohortsService]
})
export class AllCohortsComponent implements OnInit {

  cohorts = [];

  getAllCohorts = () => {
    this.api.getAllCohorts().subscribe(
      data => {
        this.cohorts = data;
        console.log(this.cohorts)
      },
      error => {
        console.log(error);
      }
    )
  }

  constructor(private api:AllCohortsService){
    this.getAllCohorts();

  }

  ngOnInit(): void {
  }

}
