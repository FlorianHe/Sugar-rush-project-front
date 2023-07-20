import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { COLOR_ARRAY_CLASS } from '../shared/globals/sugar-meter';

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
    } else if (age <= 10 && age >= 6) {
      sugarLimit = 6;
    } else if (age > 10) {
      sugarLimit = 7;
    }

    let fullLogoCount = Math.floor(amount / 4);
    let halfLogoCount = amount / 4 - fullLogoCount;

    let logos = '';

    for (let j = 0; j < sugarLimit; j++) {
      if (j < fullLogoCount) {
        logos += `<div class="svgs-class svg-${logo}" style="--color: ${COLOR_ARRAY_CLASS[j]}"></div>`;
      } else if (j == fullLogoCount) {
        logos += `<div class="svgs-class svg-half svg-${logo}" style="--color: ${COLOR_ARRAY_CLASS[j]}; --half: ${100 - halfLogoCount * 100}%"></div>`;
      } else {
        logos += `<div class="svgs-class svg-${logo}" style="--color: #FECEE9"></div>`;
      }
    }

    const sanitizedLogos = this.sanitizer.bypassSecurityTrustHtml(logos);

    return sanitizedLogos;
  }
}
