import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent {
public myStyle = {
  'color': 'red'
};
public showText = false;

public switchOnOff() {
this.showText = !this.showText;
}
}
