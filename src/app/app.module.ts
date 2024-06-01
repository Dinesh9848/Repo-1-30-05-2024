import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentsComponent } from './students/students.component';
import { CarCompanyComponent } from './car-company/car-company.component';
import { PracticeComponent } from './practice/practice.component';
import { DiceComponent } from './dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiCalculatorComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    StudentsComponent,
    CarCompanyComponent,
    PracticeComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
