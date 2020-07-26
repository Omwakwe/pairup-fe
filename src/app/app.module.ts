import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { TechnicalMentorComponent } from './components/technical-mentor/technical-mentor.component';
import { LandingComponent } from './components/landing/landing.component';
import { StudentComponent } from './components/student/student.component';
import { StudentPairsComponent } from './components/student-pairs/student-pairs.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorComponent,
    TechnicalMentorComponent,
    LandingComponent,
    StudentComponent,
    StudentPairsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
