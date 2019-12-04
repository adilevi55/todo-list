import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetYesterdayService {

  getYesterday():Date{
    var todayTimeStamp = +new Date; // Unix timestamp in milliseconds
    var oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
    var diff = todayTimeStamp - oneDayTimeStamp;
    var yesterdayDate = new Date(diff);
    return yesterdayDate;
  }
}
