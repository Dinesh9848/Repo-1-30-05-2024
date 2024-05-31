import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ages:number[] = [10,20,30,40,50];

  public states:string[] = ["Telangana", "Andhrapredesh", "Maharastra","Karnataka"]

  public products:any = [
    {name:'pen', price:20, rating:3},
    {name:'phone', price:2500, rating:5},
    {name:'shirt', price:500, rating:4.3},
    {name:'laptop', price:50000, rating:5},
  ]

  public companies:any = [
    {name:'Teja', company:'TCS', exp:3},
    {name:'Dinesh', company:'Wipro', exp:4.7},
    {name:'Chandrika', company:'CapGemini', exp:7},
    {name:'Kranthi', company:'Deloit', exp:5},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
