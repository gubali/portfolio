import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-routing-display',
  templateUrl: './routing-display.component.html',
  styleUrls: ['./routing-display.component.css']
})
export class RoutingDisplayComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  todayDate;
  title = 'Tour of health';
  perUnit = 'Base on Entity';
  perObject = 'Pass Object';
employeeList: any = [
{name: 'Asif', city: 'Bengaluru', salary: 20000, dept: 'qwerty'},
{name: 'as', city: 'Delhi', salary: 20000, dept: 'qwerty'},
{name: 'Adam', city: 'Berlin', salary: 200000, dept: 'qwerty'},
{name: 'John', city: 'LKO', salary: 120000, dept: 'qwerty'}
];
teamList: any = [
  {name: 'Zaheer', country: 'India', type: 'Bowler'},
  {name: 'Sachin', city: 'Mumbai', type: 'Batsman'},
  {name: 'Stewart', city: 'London', type: 'Bowler'},
  {name: 'James Bind', city: 'Auckland', type: 'Bowler'}
  ];
  constructor(private myservice: MyserviceService) {}
  ngOnInit(): void {
    this.todayDate = this.myservice.showDate();
  }

}
