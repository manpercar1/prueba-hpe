import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {

    const firstLetter = value[0];

    const firstLetterCapitalized = firstLetter.toUpperCase();

    const result = value.replace(firstLetter, firstLetterCapitalized);

    return result;
  }

}
