import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  constructor(private http: Http) { }
  myData = [];
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .subscribe(
      (a: Response) => {
         this.myData = a.json();
        console.log(this.myData);
      }
    );
}
}
