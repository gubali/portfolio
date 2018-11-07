import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el) {
            return el.cca2.toLowerCase().indexOf(input) > -1 || el.name.common.toLowerCase().indexOf(input) > -1;
        });
    }
    return value;
}
}
