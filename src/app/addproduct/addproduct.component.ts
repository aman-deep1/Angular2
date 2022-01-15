import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public fnum:number = 0
  public snum:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  public process(t1:any,t2:any)
  {
    this.fnum = t1.value*1
    this.snum = t2.value*1
  }
}