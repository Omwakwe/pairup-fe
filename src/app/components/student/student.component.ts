import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  student;
  myToken;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  // getStudent = (id) => {
  //   this.myToken = localStorage.getItem('token');
  //   // console.log("MyToken1")
  //   // console.log(this.myToken)
  //   this.studentService.getStudent(id).subscribe(
  //     data => {
  //       this.student = data;
  //       // console.log(this.admin)
  //       // console.log("MyToken2")
  //       // console.log(this.myToken)
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

}
