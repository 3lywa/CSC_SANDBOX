import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    AfterViewChecked
  } from '@angular/core';
  import {
    LanguageService,
    MiscService,
    DataService
  } from '../../services';
  import { Toastr } from '../../services/toastr.service';
  import { Subject } from 'rxjs/Subject';
  import { Subscription } from 'rxjs/Subscription';
  import { ToastrService } from 'ngx-toastr';
  import { PageLoadComponent } from '../pageload.component';
  import { BsLocaleService } from 'ngx-bootstrap/datepicker';
  import exportFromJSON from 'export-from-json';
  import { Item, Role } from '../../models';

  @Component({
    templateUrl: 'code.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class CodeComponent extends PageLoadComponent
    implements OnInit, OnDestroy, AfterViewChecked {
    private unsubscribe: Subject<any> = new Subject<any>();
    subscription: Subscription;

    codes: any[];

    searchText: string;

    constructor(
      private toastr: ToastrService,
      private cdr: ChangeDetectorRef,
      private languageService: LanguageService,
      private localeService: BsLocaleService,
      private dataService: DataService,
      private miscService: MiscService
    ) {
      super();

      // this.subscription = this.someService.data$.takeUntil(this.unsubscribe).subscribe();
    }

    ngAfterViewChecked() {
      this.cdr.detectChanges();
    }

    ngOnInit() {
      this.initializeOnLoad();
      this.toast = new Toastr(this.toastr, this.languageService);

      this.languageService.currentMessage.subscribe(LangSelect => {
        this.selectedLang = LangSelect;
        if (this.selectedLang === 'en') {
          this.languageService.setDatePickerLocaleEn(this.localeService);
        } else {
          this.languageService.setDatePickerLocaleFr(this.localeService);
        }
      });

      this.codes = this.dataService.getCodes()['default']['results'];
    }

    initializeOnLoad() {
      this.codes = [];
    }

    exportJSON(data) {
      const fileName = data.code;
      const exportType = 'json';

      exportFromJSON({ data, fileName, exportType });
    }

    ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
      this.cdr.detach();
    }
  }
