import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sugarMeter'
})
export class SugarMeterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(amount: number, logo: string, age: number): SafeHtml {

    let sugarLimit = 0;
    if (amount < 0) {
      amount = 0;
    }

    if (age < 6) {
      sugarLimit = 5;
      // if (amount > 19)
      // amount = 19;
    } else if (age <= 10 && age >= 6) {
      sugarLimit = 6;
      // if ( amount > 24)
      // amount = 24;
    } else if (age > 10) {
      sugarLimit = 7;
      // // if (amount > 30)
      // amount = 30;
    }
    console.log(amount);
    console.log(age);
    console.log(sugarLimit);
    let fullLogoCount = Math.floor(amount / 4);
    let halfLogoCount = amount / 4 - fullLogoCount;

    const colorArrayClass = ['purple', 'darkblue', 'lightblue', 'lightgreen', 'yellow', 'orange', 'red'];

    let logos = '';

    for (let j = 0; j < sugarLimit; j++) {
      if (j < fullLogoCount) {
        logos += `<div class="svgs-class svg-${logo}" style="--color: ${colorArrayClass[j]}"></div>`;
      } else if (j == fullLogoCount) {
        logos += `<div class="svgs-class svg-half svg-${logo}" style="--color: ${colorArrayClass[j]}; --half: ${100 - halfLogoCount * 100}%"></div>`;
      } else {
        logos += `<div class="svgs-class svg-${logo}" style="--color: #FECEE9"></div>`;
      }
    }

    const sanitizedLogos = this.sanitizer.bypassSecurityTrustHtml(logos);

    return sanitizedLogos;

  }

}
