import { Component, OnInit } from '@angular/core';
// import { Doctors } from '../doctors_name';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  todayDate;
doctorsList = [{ Id: '1001', name: 'Anil SIngh', site: 'http://www.code-sample.com' },
{ Id: '1002', name: 'Alok', site: 'http://www.code-view.com' },
{ Id: '1003', name: 'Reena', site: 'http://www.code-sample.xyz' },
{ Id: '1004', name: 'Dilip', site: 'http://www.codefari.com' },
];
movieTitle = 'Movies Title';
dcHeroes = ['Batam', 'super somic', 'wonder women', 'flash'];
toggleFlag = true;
 toggleElem() {
this.toggleFlag = !this.toggleFlag;
}
constructor(private myservice: MyserviceService) {}
ngOnInit(): void {
  this.todayDate = this.myservice.showDate();
}
}
