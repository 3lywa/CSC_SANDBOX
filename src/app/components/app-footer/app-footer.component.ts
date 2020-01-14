import { Component, OnInit } from '@angular/core';
import { LanguageService} from '../../services';
import { PageLoadComponent } from '../../views/pageload.component';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent extends PageLoadComponent implements OnInit {

  constructor(
    private languageService: LanguageService) {
    super();
  }

  ngOnInit() {
    this.languageService.currentMessage.subscribe(LangSelect => { this.selectedLang = LangSelect; });
  }
}
