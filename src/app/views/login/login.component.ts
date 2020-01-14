import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { PageLoadComponent } from '../pageload.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent extends PageLoadComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  message: string = null;
  background = '';
  isIEOrEdge: boolean;

  isActive = true;
  loggedOut = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService,
    private translate: TranslateService) {
    super();
    this.translate = translate;
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    // check if IE or Edge
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);

    document.body.style.backgroundColor = this.background;

    // language select
    this.languageService.currentMessage.subscribe(LangSelect => this.selectedLang = LangSelect);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.selectedLangLabel = localStorage.getItem('selectedLang') ? localStorage.getItem('selectedLang') : 'Français';
    this.selectedLang = (this.selectedLangLabel === 'Français') ? this.lang[0] : this.lang[1];
    this.translate.use(this.selectedLang);
    this.languageService.changeMessage(this.selectedLang);

    this.model.username = 'test';
    this.model.password = 'test';
  }

  clickLanguage() {
    this.selectedLangLabel = (this.selectedLangLabel === 'English') ? this.languages[1] : this.languages[0];
    this.selectedLang = (this.selectedLangLabel === 'Français') ? this.lang[0] : this.lang[1];
    this.switchLanguage(this.selectedLang);
    this.languageService.changeMessage(this.selectedLang);
  }

  switchLanguage = (lang: string) => {
    this.translate.use(lang);
    localStorage.setItem('selectedLang', lang === 'en' ? this.languages[1] : this.languages[0]);
  }

  login() {
    this.loading = true;
    this.router.navigate([this.returnUrl]);
  }
}
