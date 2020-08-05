import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-pairs',
  templateUrl: './student-pairs.component.html',
  styleUrls: ['./student-pairs.component.css']
})
export class StudentPairsComponent implements OnInit {

  pairDuration;
  date; 
  pairDate(){
    if (this.date.value == "undefined"){
      alert("Please select a start date for the pair duration")
    }
    console.log("DURATION");  
    console.log(this.pairDuration);
  }
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
