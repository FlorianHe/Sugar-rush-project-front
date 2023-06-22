import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentChange'
})
export class PercentChangePipe implements PipeTransform {
  transform(newValue: number, oldValue: number): string {
    let change = (((newValue - oldValue) / oldValue) * 100);
    if (change > 0)
        return ("+"+change.toFixed(2)+"%");
    else
        return (change.toFixed(2)+"%");
  }
}