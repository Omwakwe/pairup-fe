import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { TechnicalMentorComponent } from './components/technical-mentor/technical-mentor.component';
import { LandingComponent } from './components/landing/landing.component';
import { StudentComponent } from './components/student/student.component';
import { StudentPairsComponent } from './components/student-pairs/student-pairs.component';
import { AdminDashboardComponent } from './components/administrator/admin-dashboard/admin-dashboard.component';
import { AddCohortComponent } from './components/administrator/add-cohort/add-cohort.component';
import { AddStudentComponent } from './components/administrator/add-student/add-student.component';
import { AddMentorComponent } from './components/administrator/add-mentor/add-mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorComponent,
    TechnicalMentorComponent,
    LandingComponent,
    StudentComponent,
    StudentPairsComponent,
    AdminDashboardComponent,
    AddCohortComponent,
    AddStudentComponent,
    AddMentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
