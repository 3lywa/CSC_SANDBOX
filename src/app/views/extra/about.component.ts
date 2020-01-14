import { Component } from '@angular/core';
import { PageLoadComponent } from '../pageload.component';

@Component({
  templateUrl: 'about.component.html'
})

export class AboutComponent extends PageLoadComponent {
  constructor() {
    super();
  }
}
