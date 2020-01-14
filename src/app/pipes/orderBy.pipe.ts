import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy', pure: true })

export class OrderByPipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {
    if (args.property == null || args.direction == null) {
      return records;
    }
    return records.sort(function (a, b) {
      if (a[args.property] == null || b[args.property] == null) {
        return 0;
      } else {
        if (!isNaN(parseInt(a[args.property], 10)) || !isNaN(parseInt(b[args.property], 10))
          || isNaN(parseInt(a[args.property], 10)) || isNaN(parseInt(b[args.property], 10))) {

          if (a[args.property] < b[args.property]) {
            return 1 * args.direction;
          } else if (a[args.property] > b[args.property]) {
            return -1 * args.direction;
          } else {
            return 0;
          }

        } else if (a[args.property] === true || a[args.property] === false) {
          if (a[args.property].toString() < b[args.property].toString()) {
            return 1 * args.direction;
          } else if (a[args.property].toString() > b[args.property].toString()) {
            return -1 * args.direction;
          } else {
            return 0;
          }

        } else {
          if (a[args.property].trim().toLowerCase() < b[args.property].trim().toLowerCase()) {
            return 1 * args.direction;
          } else if (a[args.property].trim().toLowerCase() > b[args.property].trim().toLowerCase()) {
            return -1 * args.direction;
          } else {
            return 0;
          }
        }
      }
    });
  }
}
