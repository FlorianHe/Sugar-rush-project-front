import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDate'
})
export class DateDisplayPipe implements PipeTransform {
  transform(dateDisplayed: Date): string {

    const currentDate= new Date().toISOString().substring(0, 10);
    
    let date = ""
    if(currentDate!==dateDisplayed.toString().substring(0,10)){
        date=formatDate(dateDisplayed, "dd/MM/yy", "en")
    } else {
        date=formatDate(dateDisplayed, "hh:mm", "en")
    }
    return date
    
  }
}