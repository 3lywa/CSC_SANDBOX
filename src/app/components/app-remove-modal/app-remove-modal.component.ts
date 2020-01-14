import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-remove-modal',
  templateUrl: './app-remove-modal.component.html'
})

export class RemoveModalComponent {
  @ViewChild('modal', { static: false }) modal: any;

  @Input() selectedLang: string;
  @Input() itemName: string;
  @Output() deleteOnClick = new EventEmitter();

  run() {
    this.deleteOnClick.emit();
  }

  show() {
    this.modal.show();
  }
}
