import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'substring', pure: true })

export class SubStringPipe implements PipeTransform {

    transform(item: any, selectedLang: string, type: string): any {
        let name = '';
        let nameLength = '';
        if (type === 'isActivity') {
            name = selectedLang === 'en' ? item.activityName : item.activityNameFr;
        } else if (type === 'isOutput') {
            name = selectedLang === 'en' ? item.outputName : item.outputNameFr;
        } else {
            name = selectedLang === 'en' ? item.nameEn : item.nameFr;
        }
        nameLength = name.length > 80 ? '...' : '';
        name = name.substring(0, 80) + nameLength;

        return name;
    }
}
