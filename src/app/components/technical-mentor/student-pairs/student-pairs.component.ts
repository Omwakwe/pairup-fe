import { Component, OnInit } from '@angular/core';
import { PairupService } from '../../../services/pairup.service';

@Component({
  selector: 'app-student-pairs',
  templateUrl: './student-pairs.component.html',
  styleUrls: ['./student-pairs.component.css'],
  providers: [PairupService]
})
export class StudentPairsComponent implements OnInit {

  pairDuration;
  date; 
  myData;
  returned_data
  constructor(private pairupService:PairupService){
  }

 ngOnInit(){
   this.myData ={
     cohort_id: Number,
     pairDuration: Number,
   };
 }

  pairDate(){
    if (this.date.value == "undefined"){
      alert("Please select a start date for the pair duration")
    }
    console.log("DURATION");  
    console.log(this.pairDuration);
  }

  GeneratePairs = () => {
    this.pairupService.GeneratePairs(this.myData).subscribe({
      next: (data) => {
        this.returned_data = data;
        console.log("STUDENT PAIRS")
        console.log(this.returned_data)
      },
      error: (err) => {
        // (this.errorMessage = err);
        alert(err)
      },
  });

}
}
