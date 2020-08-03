import { Component, OnInit } from '@angular/core';
import { AllMentorsService  } from 'src/app/services/all-mentors.service';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css'],
  providers: [AllMentorsService]
})
export class AddMentorComponent implements OnInit {

  mentor;
  returned_mentor;
  errorMessage = 'Error when creating mentor'
  constructor(private api:AllMentorsService){
    this.RegisterMentor();
  }
  ngOnInit() {
    this.mentor ={
      
      email: '',
      first_name: '',
      last_name: '',
      user_name: '',
      cohort: '',
      bio: '',
      phone: '',

    };
  }

  RegisterMentor = () => {
    // alert("COHORT" + this.cohort.cohort_name)
    this.api.RegisterMentor(this.mentor).subscribe({
      next: (data) => {
        this.returned_mentor = data;
        alert('Mentor ' + this.returned_mentor.first_name + ' has been created')
      },
      error: (err) => {
        (this.errorMessage = err);
        // alert(err);
      },
  });
}
}
