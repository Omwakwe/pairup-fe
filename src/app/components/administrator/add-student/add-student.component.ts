import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [ApiService]
})
export class AddStudentComponent implements OnInit {

  student;
  returned_student;
  errorMessage = 'Error when creating student'
  constructor(private api:ApiService){
    this.RegisterStudent();
  }
  ngOnInit() {
    this.student ={

      email: '',
      first_name: '',
      last_name: '',
      user_name: '',
      cohort: '',
      bio: '',
      phone: '',

    };
  }

  RegisterStudent = () => {
    // alert("COHORT" + this.cohort.cohort_name)
    this.api.RegisterStudent(this.student).subscribe({
      next: (data) => {
        this.returned_student = data;
        alert('student ' + this.returned_student.first_name + ' has been created')
      },
      error: (err) => {
        (this.errorMessage = err);
        // alert(err);
      },
  });
}
}