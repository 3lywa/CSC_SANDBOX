import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiscService, LanguageService } from '../../services';
import { Toastr } from '../../services/toastr.service';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/filter';
import { PageLoadComponent } from '../../views/pageload.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})

export class FullLayoutComponent extends PageLoadComponent implements OnInit, OnDestroy {

  constructor(
    private toastr: ToastrService,
    private miscService: MiscService,
    private languageService: LanguageService) {
    super();
  }

  ngOnInit() {
    this.toast = new Toastr(this.toastr, this.languageService);
  }

  ngOnDestroy() {
  }

  closeAll() {
    this.miscService.closeAll(true);
  }
}
