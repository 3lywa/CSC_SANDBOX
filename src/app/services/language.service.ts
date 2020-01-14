import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale, frLocale } from 'ngx-bootstrap/locale';
defineLocale('en-gb', enGbLocale);
defineLocale('fr', frLocale);

@Injectable()
export class LanguageService {

  private messageSource = new BehaviorSubject<string>('en');
  currentMessage = this.messageSource.asObservable();

  private loggedInSource = new BehaviorSubject<number>(0);
  loggedInId = this.loggedInSource.asObservable();

  changeMessage(language: string) {
    this.messageSource.next(language);
  }

  getLoginId(loginId: number) {
    this.loggedInSource.next(loginId);
  }

  setDatePickerLocaleEn(localeService?) {
    localeService.use('en-gb');
  }

  setDatePickerLocaleFr(localeService?) {
    localeService.use('fr');
  }

  changeNavTitle(titleName, title, el, renderer) {
    const name = renderer.createText(titleName);
    const nativeElement: HTMLElement = el.nativeElement;
    const li = renderer.createElement('li');

    renderer.addClass(li, 'nav-title');

    if (title.class) {
      const classes = title.class;
      renderer.addClass(li, classes);
    }

    if (title.wrapper) {
      const wrapper = renderer.createElement(title.wrapper.element);

      renderer.appendChild(wrapper, name);
      renderer.appendChild(li, wrapper);
    } else {
      renderer.appendChild(li, name);
    }
    renderer.appendChild(nativeElement, li);
  }
}
