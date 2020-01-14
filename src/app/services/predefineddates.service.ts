import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class PredefinedDateService {
  constructor(private http: HttpClient) { }

  getThisWeek(arr) {
    let thisWeekArr = [];
    const mon = new Date(moment().startOf('isoWeek').format());
    const sun = new Date(moment().startOf('isoWeek').add(6, 'day').format());
    thisWeekArr = [mon, sun];
    return this.compareData(arr, thisWeekArr);
  }

  getLastWeek(arr) {
    let lastWeek = [];
    const mon = new Date(moment().startOf('isoWeek').subtract(7, 'day').format());
    const sun = new Date(moment().startOf('isoWeek').subtract(1, 'day').format());
    lastWeek = [mon, sun];
    return this.compareData(arr, lastWeek);
  }

  getThisMonth(arr) {
    let thisMonthArr = [];
    const begin = new Date(moment().startOf('month').format());
    const end = new Date(moment().endOf('month').format());
    thisMonthArr = [begin, end];
    return this.compareData(arr, thisMonthArr);
  }

  getLastMonth(arr) {
    let lastMonthArr = [];
    const begin = new Date(moment().startOf('month').subtract(1, 'month').format());
    const end = new Date(moment().startOf('month').subtract(1, 'day').format());
    lastMonthArr = [begin, end];
    return this.compareData(arr, lastMonthArr);
  }

  getThisYear(arr) {
    let thisYearArr = [];
    const Apr = new Date(moment().startOf('year').add(3, 'month').format());
    const Mar = new Date(moment().startOf('year').add(1, 'year').add(3, 'month').subtract(1, 'day').format());
    thisYearArr = [Apr, Mar];
    return this.compareData(arr, thisYearArr);
  }

  getLastYear(arr) {
    let lastYearArr = [];
    const Apr = new Date(moment().startOf('year').subtract(1, 'year').add(3, 'month').format());
    const Mar = new Date(moment().startOf('year').add(3, 'month').subtract(1, 'day').format());
    lastYearArr = [Apr, Mar];
    return this.compareData(arr, lastYearArr);
  }

  getCustomDate(arr, startDate, endDate) {
    let customDateArr = [];
    customDateArr = [startDate, endDate];
    return this.compareCustomData(arr, customDateArr);
  }

  compareData(arr, dateArr) {
    let subCount = 0;
    // let totalHours = 0;
    for (const x of arr) {
      if (this.dateCompare(new Date(moment(x.day).toLocaleString()),
      new Date(moment(x.toDay).toLocaleString()), dateArr[0], dateArr[1])) {
        // totalHours += x.hours;
        subCount++;
      }
    }
    const data = { subCount };
    return data;
  }

  compareCustomData(arr, dateArr) {
    let subCount = 0;
    // let totalHours = 0;
    for (const x of arr) {
      if (this.dateCompareCustom(moment(x.day).startOf('day').toLocaleString(),
      moment(x.toDay).startOf('day').toLocaleString(), dateArr[0], dateArr[1])) {
        // totalHours += x.hours;
        subCount++;
      }
    }
    const data = { subCount };
    return data;
  }

  dateCompare(day, toDay, fromDate, toDate) {
    const fromCompare = new Date(fromDate).getTime();
    const toCompare = new Date(toDate).getTime();
    return new Date(day).getTime() >= fromCompare && new Date(day).getTime() <= toCompare ||
      new Date(toDay).getTime() >= fromCompare && new Date(day).getTime() <= toCompare ? true : false;
  }

  dateCompareCustom(day, toDay, fromDate, toDate) {
    const fromCompare = new Date(moment(fromDate).startOf('day').toLocaleString()).getTime();
    const toCompare = new Date(moment(toDate).startOf('day').toLocaleString()).getTime();
    if (fromDate && toDate) {
      return new Date(day).getTime() >= fromCompare && new Date(toDay).getTime() <= toCompare ||
        new Date(toDay).getTime() >= fromCompare && new Date(day).getTime() <= toCompare ? true : false;
    } else {
      return new Date(day).getTime() >= fromCompare || new Date(toDay).getTime() <= toCompare ? true : false;
    }
  }
}
