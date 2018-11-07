import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  //  pipes: [FilterPipe]
})
export class CountryListComponent implements OnInit {
  title = 'Stock Exchange Data';
  productToUpdate: any;
    constructor(private http: Http) { }
  public countryList = [];
  public searchString: string;
  public totalLength;
  public products = [];
  ngOnInit() {
    this.products = this.getProducts();
    this.http.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .subscribe(
      (res) => {
        this.countryList = res.json();
        this.countryList = this.countryList.map(el => {
       el.languages1 = Object.values(el.languages).join(', ');
       return el;
        });
        this.totalLength = this.countryList.length;
      }
      // (a: Response) => {
      //    this.countryList = a.json();
      //    this.totalLength = this.countryList.length;
      //     console.log(this.totalLength);
      // }
    );

/*only test*/
const arr = [ 1, 2, 3,   4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(element => {
  console.log('forEach Element: ' + element);
});
}
handleClick() {
  alert('handle click');
}

getProducts() {
  return [{ id: 1, 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
  { id: 2, 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
  { id: 3, 'title': 'Resistor', 'price': 78, 'stock': 45 },
  { id: 4, 'title': 'Tractor', 'price': 20000, 'stock': 1 },
  { id: 5, 'title': 'Roller', 'price': 62, 'stock': 5 },
  {  id: 6, 'title': 'Food', 'price': 62, 'stock': 15 },
  {  id: 7, 'title': 'Auto', 'price': 162, 'stock': 5 },
  { id: 8, 'title': 'Neon', 'price': 362, 'stock': 115 },
  {  id: 9, 'title': 'Roller', 'price': 462, 'stock': 115 },
  { id: 10, 'title': 'part', 'price': 462, 'stock': 1 }
];
}
changeStockValue(e) {
  // console.log(e, e.updatedStockValue);
  this.productToUpdate = this.products.find(this.findProducts, [e.id]);
  this.productToUpdate.stock = parseInt (e.updatedStockValue);
  }
  findProducts (e) {
    return e.id === this[0];
  }
}
