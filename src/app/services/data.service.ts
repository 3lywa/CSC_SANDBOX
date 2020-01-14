import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeUntil';
import { AppSettings } from '../app.settings';

import * as codes from '../../assets/data/Codes.json';
import * as facilities from '../../assets/data/facilities.json';
import * as offenders from '../../assets/data/offenders.json';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getCodes() {
    return codes;
  }

  getFacilities() {
    return facilities;
  }

  getOffenders() {
    return offenders;
  }
}
