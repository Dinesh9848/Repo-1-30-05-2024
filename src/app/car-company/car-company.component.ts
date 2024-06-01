import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-company',
  templateUrl: './car-company.component.html',
  styleUrls: ['./car-company.component.css']
})
export class CarCompanyComponent implements OnInit {


  public companies: string = '';


  // public companies:string='companies'

  constructor() { }

  ngOnInit(): void {
  }

}
