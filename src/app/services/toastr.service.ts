import { ToastrService, } from 'ngx-toastr';
import { AppSettings } from '../app.settings';
import { LanguageService } from '.';

export class Toastr {

  selectedLang: string;
  toastPosition: string = AppSettings.TOAST_POSITION;
  currentUser_toastPosition: string;

  options = {
    closeButton: true,
    positionClass: this.toastPosition
  };

  constructor(
    private toastr: ToastrService,
    private languageService: LanguageService) {
    this.languageService.currentMessage.subscribe(LangSelect => this.selectedLang = LangSelect);
  }

  showSuccess(message: string) {
    this.setToastPosition();
    this.toastr.success(message, null, this.options);
  }

  showError(message?: string) {
    this.setToastPosition();
    const errorStr = this.selectedLang === 'en' ? 'Error' : 'Erreur';
    this.toastr.error(errorStr, null, this.options);
  }

  showWarning(message: string) {
    this.setToastPosition();
    this.toastr.warning(message, null, this.options);
  }

  showInfo(message: string) {
    this.setToastPosition();
    this.toastr.info(message, null, this.options);
  }

  setToastPosition() {
    this.currentUser_toastPosition = '.TOAST_POSITION';
    const item = localStorage.getItem(this.currentUser_toastPosition);
    this.toastPosition = item == null ? this.toastPosition : item;
    this.options.positionClass = this.toastPosition;
  }
}
