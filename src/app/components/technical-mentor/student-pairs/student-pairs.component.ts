import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-pairs',
  templateUrl: './student-pairs.component.html',
  styleUrls: ['./student-pairs.component.css']
})
export class StudentPairsComponent implements OnInit {

  pairDuration;
  pairDate(){
    console.log("DURATION");  
  console.log(this.pairDuration);
  }
  constructor() {
    this.pairDate();
   }

  ngOnInit(): void {
  }

}
