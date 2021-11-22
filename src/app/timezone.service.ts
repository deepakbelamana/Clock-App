import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(private https:HttpClient) { }

  gettimezone(location: any)
  {
   return this.https.get("http://worldtimeapi.org/api/timezone/"+location)
  }
}
