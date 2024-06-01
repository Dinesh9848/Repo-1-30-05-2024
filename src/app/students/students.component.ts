import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public name:string = '';
  public num1:number = 0;
  public num2:number = 0; 


  constructor() { }

  ngOnInit(): void {
  }

  public students:any = [
    {name:'Teja', marks:65, fee:20000},
    {name:'Kranthi', marks:70, fee:20000},
    {name:'Chandrika', marks:75, fee:20000},
    {name:'Krishna', marks:70, fee:20000},
  ]

  submit() {
    let student:any ={
      name:this.name,
      marks:this.num1,
      fee:this.num2
    }
    this.students.push(student);
    this.name='';
    this.num1=0;
    this.num2=0;
  }

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }

   // sortMarksLowToHigh(): void {
  //   student = this.students.sort((a, b) => a.marks - b.marks);

  // sortMarksHighToLow(): void {
  //   this.students.sort((a, b) => b.marks - a.marks);
  // }

  // filterPendingFee(): void {
  //   // Assuming pending fee means fee not equal to 0
  //   this.students = this.students.filter(student => student.fee !== 0);
  // }

  // addSalutation(): void {
  //   this.students = this.students.map(student => {
  //     return {
  //       ...student,
  //       name: 'Mr./Ms. ' + student.name
  //     };
  //   });
  // }

 
  

}
