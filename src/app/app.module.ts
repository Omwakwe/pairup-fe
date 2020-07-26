import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { TechnicalMentorComponent } from './components/technical-mentor/technical-mentor.component';
import { LandingComponent } from './components/landing/landing.component';
import { StudentComponent } from './components/student/student.component';
import { StudentPairsComponent } from './components/technical-mentor/student-pairs/student-pairs.component';
import { AdminDashboardComponent } from './components/administrator/admin-dashboard/admin-dashboard.component';
import { AddCohortComponent } from './components/administrator/add-cohort/add-cohort.component';
import { AddStudentComponent } from './components/administrator/add-student/add-student.component';
import { AddMentorComponent } from './components/administrator/add-mentor/add-mentor.component';
import { MentorDashboardComponent } from './components/technical-mentor/mentor-dashboard/mentor-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { PairHistoryComponent } from './components/technical-mentor/pair-history/pair-history.component';
import { ProfileComponent } from './components/technical-mentor/profile/profile.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { AdminProfileComponent } from './components/administrator/admin-profile/admin-profile.component';
import { MentorProfileComponent } from './components/technical-mentor/mentor-profile/mentor-profile.component';

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
    AddMentorComponent,
    MentorDashboardComponent,
    StudentDashboardComponent,
    PairHistoryComponent,
    ProfileComponent,
    StudentProfileComponent,
    AdminProfileComponent,
    MentorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
