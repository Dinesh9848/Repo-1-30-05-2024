import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  public radius: number = 0;
  public result: number = 0;

  constructor() { }

  calculateArea() {
    this.result = Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter() {
    this.result = 2 * Math.PI * this.radius;
  }

}
