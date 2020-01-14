import { Component, Input, Output, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import 'rxjs/add/operator/map';
import 'jspdf-autotable';

@Component({
  selector: 'app-ngx-select',
  templateUrl: './app-ngx-select.component.html'
})

export class NGXSelectComponent implements OnDestroy {

  @Input() model: number;
  @Input() placeholder: string;
  @Input() class: string;
  @Input() ngClass: string;
  @Input() selectedLang: string;
  @Input() id: string;
  @Input() multiple: boolean;
  @Input() disabled: boolean;
  @Input() fieldId: string;
  @Input() fieldNameEn: string;
  @Input() fieldNameFr: string;
  @Input() items: any;
  @Output() ngModelChange = new EventEmitter();
  @Output() modelChanged = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnDestroy() {
    this.cdr.detach();
  }

  modelChange(event) {
    this.ngModelChange.emit(event);
    this.modelChanged.emit(event);
  }
}
