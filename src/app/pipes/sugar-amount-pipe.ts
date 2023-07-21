import { Pipe, PipeTransform } from '@angular/core';
import { AgeCalculatorService } from '../services/age-calculator.service';
import { SENTENCES } from '../shared/globals/sugar-meter';

@Pipe({
  name: 'sugarAmount'
})
export class SugarAmountPipe implements PipeTransform {

  constructor(private ageCalculatorService: AgeCalculatorService) {}

  transform(amount: number, birthDate: Date): string {

    const age = this.ageCalculatorService.calculateAge(birthDate);

    let amountMax = 0;
    if (age < 6) {
      amountMax = 19;
    } else if (age <= 10 && age >= 6) {
      amountMax = 24;
    } else if (age > 10) {
      amountMax = 30;
    }

    let sentenceIndex = Math.floor(amount / amountMax * 5);
    if (sentenceIndex > 4) {
      sentenceIndex = 4;
    }

    return SENTENCES[sentenceIndex][Math.floor(Math.random() * 6)];
  }
}
