import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterType', pure: true })

export class FilterTypePipe implements PipeTransform {

  /**
  *
  * @param items List of items to filter
  * @param term  a string term to compare with every property of the list
  *
  */
  static filter(items: Array<{ [key: string]: any }>, term: string): Array<{ [key: string]: any }> {

    const toCompare = term.toLowerCase();

    return items.filter(function (item: any) {
      if (item.status.toString().toLowerCase().includes(toCompare)) {
        return true;
      }
      return false;
    });
  }

  /**
  * @param items object from array
  * @param term term's search
  */
  transform(items: any, term: string): any {
    if (!term || !items) { return items; }
    return FilterTypePipe.filter(items, term);
  }
}
