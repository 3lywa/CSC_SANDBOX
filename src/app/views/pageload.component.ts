import { AppSettings } from '../app.settings';
import { FilterPipe } from '../pipes/filter.pipe';
import { Papa } from 'ngx-papaparse';
import { Toastr } from '../services/toastr.service';
import * as jsPDF from 'jspdf';
import { NgZone } from '@angular/core';

// common helper class
export class PageLoadComponent {

  // Current page for Pagination
  cp: number = AppSettings.CP_INITIAL_SIZE;

  // Toast Messages
  modalMessages: { en: string, fr: string }[] = [
    { en: 'Success', fr: 'Succès' },
    { en: 'Created', fr: 'Créé' },
    { en: 'Updated', fr: 'Actualisé' },
    { en: 'Deleted', fr: 'Supprimé' },
    { en: 'Error', fr: 'Erreur' }];

  // Dates
  months: { nameEn: string, nameFr: string }[] = [{ nameEn: 'April', nameFr: 'Avril' },
  { nameEn: 'May', nameFr: 'Mai' }, { nameEn: 'June', nameFr: 'Juin' },
  { nameEn: 'July', nameFr: 'Juillet' }, { nameEn: 'August', nameFr: 'Août' },
  { nameEn: 'September', nameFr: 'Septembre' }, { nameEn: 'October', nameFr: 'Octobre' },
  { nameEn: 'November', nameFr: 'Novembre' }, { nameEn: 'December', nameFr: 'Décembre' },
  { nameEn: 'January', nameFr: 'Janvier' }, { nameEn: 'February', nameFr: 'Février' },
  { nameEn: 'March', nameFr: 'Mars' }];

  // Days
  daysOfWeek: { en: string, fr: string }[] = [
    { en: 'Mon', fr: 'Lun' },
    { en: 'Tue', fr: 'Mar' },
    { en: 'Wed', fr: 'Mer' },
    { en: 'Thu', fr: 'Jeu' },
    { en: 'Fri', fr: 'Ven' },
    { en: 'Sat', fr: 'Sam' },
    { en: 'Sun', fr: 'Dim' }];

  // Lanagues
  languages: string[] = ['English', 'Français'];
  selectedLangLabel = 'Français';
  lang: string[] = ['en', 'fr'];
  selectedLang: string;

  // Sort table
  isDesc = false;
  column: string = null;
  direction: number = null;

  // Toast
  toast: Toastr;

  // Loading flag
  loading = true;

  // Search model
  searchText: string;

  // Settings
  datePickerOptions: any = AppSettings.getDatePickerOptions();
  ipp: number = AppSettings.MAX_PAGE_SIZE;
  maxSize: number = AppSettings.MAX_RECORD_SIZE;
  fontSize: number = AppSettings.MAX_FONT_SIZE;
  toastPosition: string = AppSettings.TOAST_POSITION;
  reducer = (accumulator, currentValue) => accumulator + currentValue;

  constructor(public zone?: NgZone, private papa?: Papa) { }

  trackById(item) {
    return item ? item.id : undefined;
  }

  getAppSettings() {
    return AppSettings;
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  getFilteredData(unFilteredData, filterBy) {
    return new FilterPipe().transform(unFilteredData, filterBy);
  }

  // PDF
  generatePDF(idName, title, noTotal?) {
    if (noTotal === 'undefined') { noTotal = false; }

    const doc = new jsPDF('p', 'pt', 'a4');
    const res = doc.autoTableHtmlToJson(document.getElementById(idName));
    const label = this.selectedLang === 'en' ? 'PROTECTED - A' : 'PROTÉGÉ - A';

    const header = function (data) {
      doc.setFontSize(10);
      doc.setTextColor(40);
      doc.setFontStyle('normal');
      doc.text(title, 210, 30);
      doc.text(label, 450, 30);
    };

    let drawCell, columnStyles;

    if (!noTotal) {
      drawCell = function (cell, data) {
        const rows = data.table.rows;
        if (data.row.index === rows.length - 1) {
          doc.setFillColor(200, 200, 255);
          doc.setFontSize(8);
        }
      };
    }

    columnStyles = {
      0: { columnWidth: 'wrap' },
      2: { columnWidth: 'wrap' },
      3: { columnWidth: 'wrap' }
    };

    const options = {
      addPageContent: header,
      drawCell,
      margin: { top: 50 },
      width: 'auto',
      startY: 50,
      styles: {
        fillStyle: 'DF',
        overflow: 'linebreak',
        lineWidth: 1,
        lineColor: [85, 51, 27],
        fontSize: 8,
      },
      columnStyles: columnStyles
    };

    doc.autoTable(res.columns, res.data, options);
    doc.save(title + '.pdf');
  }

  // CSV
  generateCSV(title, data, searchText?) {
    const filteredData = (searchText !== 'undefined') ? this.getFilteredData(data, searchText) : data;

    const dataString = filteredData.length < 1 ? this.selectedLang === 'en' ? 'No,Results,Found' :
      'Non,Resultats,A trouve' : this.papa.unparse(filteredData);

    const download = function (content, fileName, mimeType) {
      const a = document.createElement('a');
      mimeType = mimeType || 'application/octet-stream';

      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(new Blob([content], { type: mimeType }), fileName);
      } else if (URL && 'download' in a) {
        a.href = URL.createObjectURL(new Blob([content], { type: mimeType }));
        a.setAttribute('download', fileName);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        location.href = 'data:application/octet-stream,' + encodeURIComponent(content);
      }
    };
    download(dataString, title + '.csv', 'text/csv;encoding:utf-8');
  }
}
