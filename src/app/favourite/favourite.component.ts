import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
 @Input() isSelectd:boolean;
  constructor() { }

  ngOnInit() {
  }
onClick(){
 // this.isSelectd = !this.isSelectd;
 alert('sorry');
}
}
