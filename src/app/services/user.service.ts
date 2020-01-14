import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeUntil';
import { AppSettings } from '../app.settings';

@Injectable()
export class UserService {
  private dataSubject: BehaviorSubject<User[]> = new BehaviorSubject([]);
  data$: Observable<User[]> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateData(): Observable<User[]> {
    return this.getData().do((data) => {
      this.dataSubject.next(data);
    });
  }

  create(user: User) {
    return this.http.post(AppSettings.API_USER, user, {observe: 'response'});
  }

  update(user: User, username: string) {
    return this.http.put(AppSettings.API_USER + username, user, {observe: 'response'});
  }

  delete(username: string) {
    return this.http.delete(AppSettings.API_USER + username, {observe: 'response'});
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(AppSettings.API_USER).map(res => res);
  }

  logout(username: string) {
    //
  }
}
