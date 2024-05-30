import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {


  public height:number=0;
  public weight:number=0;
  public result:number=0;
  public over:string="";


  calci(){
    this.result= Math.round(this.weight/((this.height/100)*(this.height/100)));
    if(this.result<=18.5)
      {
        this.over="(Under Weight)";
      }
      else if(this.result<25&& this.result>18.5 ){
        this.over="(Normal Weight)";
      }
      else if(this.result<30&& this.result>=25){
        this.over="(Over Weight)";
      }
      else if(this.result<35&& this.result>=30){
        this.over="(Obesity)";
      }
      else{
        this.over="(Extreme Obesity)";
      }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
