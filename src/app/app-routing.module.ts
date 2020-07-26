import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { StudentComponent } from './components/student/student.component';
import { StudentPairsComponent } from './components/student-pairs/student-pairs.component';
import { TechnicalMentorComponent } from './components/technical-mentor/technical-mentor.component';
import { AdminDashboardComponent } from './components/administrator/admin-dashboard/admin-dashboard.component';
import { AddCohortComponent } from './components/administrator/add-cohort/add-cohort.component';
import { AddMentorComponent } from './components/administrator/add-mentor/add-mentor.component';
import { AddStudentComponent } from './components/administrator/add-student/add-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
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
  { path: 'student', component: StudentComponent},
  { path: 'pairs', component: StudentPairsComponent},
  { path: 'technical-mentor', component: TechnicalMentorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
