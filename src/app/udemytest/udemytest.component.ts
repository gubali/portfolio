import { Component, OnInit ,Input} from '@angular/core';
import { SummaryPipe } from '../summary.pipe';

@Component({
  selector: 'app-udemytest',
  templateUrl: './udemytest.component.html',
  styleUrls: ['./udemytest.component.css']
})
export class UdemytestComponent implements OnInit {
myClass = true;
isActive = true;
divClicked(){
  alert("div was cledked????");
  }
myEvent($event){
  //$event.stopPropagation();
console.log("Clicked Button" , $event);
}
OnkeyUp($event){
 console.log($event.target.value);
}

email = "khan@gmail.com";
templateVariable(){
console.log(this.email);
}

myArray = [1,3,7];
even = (elem) =>{
  return elem % 2 ===0;
};
  constructor() { 
    console.log(this.myArray.some(this.even));
  }

  ngOnInit() {
  }

  myCource = [{
    title: 'Angular cources',
    rating: 2,
    price: 200,
    student:30330,
    date: new Date()
}];

text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `;

imageUrl = "http://placehold.it/300/09f.png/fff";
fnAlert = () =>{alert('Click On Image!')}

     ourPets = [{
      animalType: "cat",
      names:["Meozer","fluffy","kit-Cat"]
    },
    {
      animalType: "dog",
      names:["bark","bhaon","oan oan"]
    }]
   
    
}
