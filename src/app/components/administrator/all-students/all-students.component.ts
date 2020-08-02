import { Component, OnInit } from '@angular/core';
import {  AllStudentsService } from "../../../services/all-students.service";

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
