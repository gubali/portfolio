import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
listNavitem = [
  {id: '1', name: 'Doctors', link: 'doctorList'},
  {id: '2', name: 'List with Parameters', link: 'patientList'},
  {id: '3', name: 'Add List', link: 'addList'},
  {id: '5', name: 'Fetch Data', link: 'fetchData'},
  {id: '6', name: 'Country List', link: 'countryData'},
  {id: '7', name: 'Udemy Tutorial', link: 'UdemyTest'}
];

}
