import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, UserService } from '../../services';
import { Toastr } from '../../services/toastr.service';
import { PageLoadComponent } from '../../views/pageload.component';
import { User } from '../../models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})

export class AppHeaderComponent extends PageLoadComponent implements OnInit {
  model: User;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private toastr: ToastrService,
    private userService: UserService) {
    super();
    this.translate = translate;
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.initializeOnLoad();

    this.languageService.currentMessage.subscribe(LangSelect => this.selectedLang = LangSelect);
    this.toast = new Toastr(this.toastr, this.languageService);

    this.selectedLangLabel = localStorage.getItem('selectedLang') ? localStorage.getItem('selectedLang') : 'Français';
    this.selectedLang = (this.selectedLangLabel === 'Français') ? this.lang[0] : this.lang[1];
    this.translate.use(this.selectedLang);
    this.languageService.changeMessage(this.selectedLang);
  }

  initializeOnLoad() {
    this.model = new User();
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

  logout() {
    this.userService.logout('');
  }
}
