import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent {

@Input() teamList;
keysList = [];
keyValue = [];
ngOnInit(): void {
  this.teamList.forEach(team => {
    console.log(this.keysList.push(Object.entries(team)));
  }
);
/*this.teamList.forEach(team => {
  this.keyValue = Object.values(team);
  console.log(this.keyValue);
});
*/

}
}
