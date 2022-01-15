import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Student : any=[];

  constructor() { }

  ngOnInit(): void {
  }

  public process(Name:any,Roll:any,Age:any,Marks:any)
  {
    let name = Name.value
    let roll = Roll.value
    let age = Age.value
    let marks = Marks.value
    this.Student.push({name,roll,age,marks});
    console.log(this.Student)
    
  }
}