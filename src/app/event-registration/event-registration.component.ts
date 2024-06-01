import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  public names:string[] = [];
  public name:string = ''; 

  constructor() { }

  ngOnInit(): void {
  }


  register(){
    this.names.push(this.name);
    this.name="";
  }

  delete(i:number){
    this.names.splice(i,1);
  }

  deleteLast(){
    this.names.pop();
  }

  // sortNames() {
  //   this.names.sort((a, b) => a.localeCompare(b));
  // }

  sortNames() {
    this.names.sort((a, b) => a > b ? 1 : -1);
  }

  sortNamesDescending() {
    this.names.sort((a, b) => a < b ? 1 : -1);
  }

  addSalutation() {
    this.names = this.names.map(name => `Mr. ${name}`);
  }

  addMr(index: number) {
    this.names[index] = `Mr. ${this.names[index]}`;
  }

  addMrs(index: number) {
    this.names[index] = `Mrs. ${this.names[index]}`;
  }


  

}

