import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sugarMeter'
})
export class SugarMeterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(amount: number, logo: string, age: number): SafeHtml {

    let amountLimit = 0;

    if (age < 6) {
      amountLimit = 20;
      amount = Math.min(Math.max(amount, 0), amountLimit);
    } else if (age < 10 && age >= 6) {
      amountLimit = 24;
      amount = Math.min(Math.max(amount, 0), amountLimit);
    } else {
      amountLimit = 30;
      amount = Math.min(Math.max(amount, 0), amountLimit);
    }

    let fullLogoCount = Math.floor(amount / 4);

    let sugarLimit = 0;

    if (age < 6) {
      sugarLimit = 5;
      fullLogoCount = Math.min(Math.max(fullLogoCount, 0), sugarLimit);
    } else if (age < 10 && age >= 6) {
      sugarLimit = 6;
      fullLogoCount = Math.min(Math.max(fullLogoCount, 0), sugarLimit);
    } else {
      sugarLimit = 7;
      fullLogoCount = Math.min(Math.max(fullLogoCount, 0), sugarLimit);
    }

    const colorArrayClass = ['purple', 'darkblue', 'lightblue', 'lightgreen', 'yellow', 'orange', 'red'];

    let i = 1;
    let logos = '';

    for (i; i <= sugarLimit; i++) {
      while (i <= fullLogoCount) {
        if (sugarLimit == 5) {
          logos += `<div class="svgs-class svg-${logo}" style="--color: ${colorArrayClass[i + 1]}"></div>`;
        } else if (sugarLimit == 6) {
          logos += `<div class="svgs-class svg-${logo}" style="--color: ${colorArrayClass[i]}"></div>`;
        } else if (sugarLimit == 7) {
          logos += `<div class="svgs-class svg-${logo}" style="--color: ${colorArrayClass[i - 1]}"></div>`;
        }
        i++;
      }
      if (fullLogoCount == 0) {
        logos += `<div class="svgs-class svg-${logo}" style="--color: #FECEE9"></div>`;
      } else if (i > fullLogoCount + 1) {
        logos += `<div class="svgs-class svg-${logo}" style="--color: #FECEE9"></div>`;
      }
    }

    const sanitizedLogos = this.sanitizer.bypassSecurityTrustHtml(logos);

    return sanitizedLogos;

  }

}
