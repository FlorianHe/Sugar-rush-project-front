import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { COLOR_ARRAY_CLASS } from '../shared/globals/sugar-meter';

@Pipe({
  name: 'sugarMeter'
})
export class SugarMeterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(amount: number, logo: string, age: number): SafeHtml {

    let i = 0;

    if (age < 6) {
      i = 2;
    } else if (age <= 10 && age >= 6) {
      i = 1;
    } else if (age > 10) {
      i = 0;
    }

    let fullLogoCount = Math.floor(amount / 4);
    let halfLogoCount = amount / 4 - fullLogoCount;
    let logos = '';

    for (let j = i; j < 7; j++) {
      if (j < fullLogoCount + i) {
        logos += `<div class="svgs-class svg-${logo}" style="--color: ${COLOR_ARRAY_CLASS[j]}"></div>`;
      } else if (j == fullLogoCount + i) {
        logos += `<div class="svgs-class svg-half svg-${logo}" style="--color: ${COLOR_ARRAY_CLASS[j]}; --half: ${100 - halfLogoCount * 100}%"></div>`;
      } else {
        logos += `<div class="svgs-class svg-${logo}" style="--color: #FECEE9"></div>`;
      }
    }
    for (let k = 7 - i; k < amount/4 && k < 14 - i *2; k++) {
      if (k == fullLogoCount) {
        logos += `<div class="svgs-class svg-half-over svg-${logo}" style="--color: ${COLOR_ARRAY_CLASS[7]}; --half: ${100 - halfLogoCount * 100}%"></div>`;
      } else 
        logos += `<div class="svgs-class svg-${logo}" style="--color: ${COLOR_ARRAY_CLASS[7]}"></div>`;
    }

    const sanitizedLogos = this.sanitizer.bypassSecurityTrustHtml(logos);

    return sanitizedLogos;
  }
}
