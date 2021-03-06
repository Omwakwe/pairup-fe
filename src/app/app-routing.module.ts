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
import { PairHistoryComponent } from './components/technical-mentor/pair-history/pair-history.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { MentorProfileComponent } from './components/technical-mentor/mentor-profile/mentor-profile.component';
import { AdminProfileComponent } from './components/administrator/admin-profile/admin-profile.component';
import { AdminLoginComponent } from './components/administrator/admin-login/admin-login.component';
import { AllCohortsComponent } from './components/administrator/all-cohorts/all-cohorts.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './services/admin/admin.service';
import { AllMentorsComponent } from './components/administrator/all-mentors/all-mentors.component';
import { AllStudentsComponent } from './components/administrator/all-students/all-students.component';
import { LoginComponent } from './components/login/login.component';
import { StudentLoginComponent } from './components/student/student-login/student-login.component';
import { MentorLoginComponent } from './components/technical-mentor/mentor-login/mentor-login.component';
import { TmStudentsComponent } from './components/technical-mentor/tm-students/tm-students.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'student-login', component: StudentLoginComponent},
  { path: 'mentor-login', component: MentorLoginComponent},
  { path: 'admin', 
    component: AdministratorComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent},
      { path: 'new-cohort', component: AddCohortComponent},
      { path: 'all-cohorts', component: AllCohortsComponent},
      { path: 'new-mentor', component: AddMentorComponent},
      { path: 'new-student', component: AddStudentComponent},
      { path: 'all-mentors', component: AllMentorsComponent},
      { path: 'all-students', component: AllStudentsComponent},
      { path: 'admin-profile', component: AdminProfileComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
  { path: 'student', 
    component: StudentComponent,
    children: [
      { path: 'dashboard', component: StudentDashboardComponent},
      { path: 'student-profile', component: StudentProfileComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
  { path: 'pairs', component: StudentPairsComponent},
  { path: 'technical-mentor', 
    component: TechnicalMentorComponent,
    children: [
      { path: 'dashboard', component: MentorDashboardComponent},
      // { path: 'pairs', component: StudentPairsComponent},
      // { path: 'history', component: PairHistoryComponent},
      { path: 'pairs', component: PairHistoryComponent},
      { path: 'mentor-profile', component: MentorProfileComponent},
      { path: 'tm-students', component: TmStudentsComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
