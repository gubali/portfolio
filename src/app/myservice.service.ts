import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor() { }
showDate()
{
  const currentDate = new Date();
  return currentDate;
}

}
