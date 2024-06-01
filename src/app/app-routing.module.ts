import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
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

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, children:[
    {path:'welcome', component: WelcomeComponent},
    {path:'home', component: HomeComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'bmi-calculator', component:BmiCalculatorComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'eventregistration', component:EventRegistrationComponent},
    {path:'students', component:StudentsComponent},
    {path:'carcompany', component:CarCompanyComponent},
    {path:'practice', component:PracticeComponent},
    {path:'dice', component:DiceComponent}
  ]},
  {path:'', component: LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
