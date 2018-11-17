import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2-child',
  templateUrl: './parent2-child.component.html',
  styleUrls: ['./parent2-child.component.css']
})
export class Parent2ChildComponent implements OnInit {
chilData:string;
  constructor() { }

  ngOnInit() {
  }

}
