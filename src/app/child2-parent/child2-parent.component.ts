import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2-parent',
  templateUrl: './child2-parent.component.html',
  styleUrls: ['./child2-parent.component.css'],
})
export class Child2ParentComponent implements OnInit {
@Input() parentData:string;
@Output() childEvent = new EventEmitter<string>();
onChange(value:string){
this.childEvent.emit(value);
}
  constructor() { }

  ngOnInit() {
  }

}
