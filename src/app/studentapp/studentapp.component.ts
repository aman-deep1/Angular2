import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-studentapp',
  templateUrl: './studentapp.component.html',
  styleUrls: ['./studentapp.component.css']
})
export class StudentappComponent implements OnInit {

  @Input("student") ob:any;
  @Output("delStud") deleteObj = new EventEmitter<String>()
  //@Input() student:any;

  public delete(roll:String)
  {
    this.deleteObj.emit(roll)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
