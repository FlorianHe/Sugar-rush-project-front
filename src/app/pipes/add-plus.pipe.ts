import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPlus'
})
export class addPlusPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0)
        return ("+"+value.toFixed(2));
    else
        return (value.toFixed(2));
  }
}