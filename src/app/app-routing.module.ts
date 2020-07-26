import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { StudentComponent } from './components/student/student.component';
import { StudentPairsComponent } from './components/technical-mentor/student-pairs/student-pairs.component';
import { TechnicalMentorComponent } from './components/technical-mentor/technical-mentor.component';
import { AdminDashboardComponent } from './components/administrator/admin-dashboard/admin-dashboard.component';
import { AddCohortComponent } from './components/administrator/add-cohort/add-cohort.component';
import { AddMentorComponent } from './components/administrator/add-mentor/add-mentor.component';
import { AddStudentComponent } from './components/administrator/add-student/add-student.component';
import { MentorDashboardComponent } from './components/technical-mentor/mentor-dashboard/mentor-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent},
  { path: 'admin', 
    component: AdministratorComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent},
      { path: 'new-cohort', component: AddCohortComponent},
      { path: 'new-mentor', component: AddMentorComponent},
      { path: 'new-student', component: AddStudentComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
  { path: 'student', 
    component: StudentComponent,
    children: [
      { path: 'dashboard', component: StudentDashboardComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
  { path: 'pairs', component: StudentPairsComponent},
  { path: 'technical-mentor', 
    component: TechnicalMentorComponent,
    children: [
      { path: 'dashboard', component: MentorDashboardComponent},
      { path: 'pairs', component: StudentPairsComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
