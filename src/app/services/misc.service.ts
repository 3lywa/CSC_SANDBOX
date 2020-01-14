import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MiscService {

  private flagSource = new BehaviorSubject<boolean>(false);
  nextFlag = this.flagSource.asObservable();

  private closeSource = new BehaviorSubject<boolean>(false);
  return = this.closeSource.asObservable();

  constructor() { }

  setFlag(flag: boolean) {
    this.flagSource.next(flag);
  }

  closeAll(flag: boolean) {
    this.closeSource.next(flag);
  }
}
