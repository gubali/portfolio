import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-custome-component',
  templateUrl: './custome-component.component.html',
  styleUrls: ['./custome-component.component.css']
})
export class CustomeComponentComponent {
  @Input('name') employeeName: string;
  @Input('city') employeeCity: string;
  @Input('salary') employeeSalary: number;
  @Input('dept') dept: string;
}
