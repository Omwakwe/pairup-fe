import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { StudentComponent } from './components/student/student.component';
import { StudentPairsComponent } from './components/student-pairs/student-pairs.component';
import { TechnicalMentorComponent } from './components/technical-mentor/technical-mentor.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent},
  { path: 'admin', component: AdministratorComponent},
  { path: 'student', component: StudentComponent},
  { path: 'pairs', component: StudentPairsComponent},
  { path: 'technical-mentor', component: TechnicalMentorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
