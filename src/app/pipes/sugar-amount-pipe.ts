import { Pipe, PipeTransform } from '@angular/core';
import { AgeCalculatorService } from '../services/age-calculator.service';
import { SENTENCES } from '../shared/globals/pipe';

@Pipe({
  name: 'sugarAmount'
})
export class SugarAmountPipe implements PipeTransform {

  constructor(private ageCalculatorService: AgeCalculatorService) {}

  transform(amount: number, birthDate: Date): string {

    const age = this.ageCalculatorService.calculateAge(birthDate);

    if (amount < 0) {
      amount = 0;
    }

    let amountMax = 0;
    if (age < 6) {
      amountMax = 19;
    } else if (age <= 10 && age >= 6) {
      amountMax = 24;
    } else if (age > 10) {
      amountMax = 30;
    }

    let sentenceIndex = 0;
    if (amount > amountMax) {
      sentenceIndex = 5;
    } else if (amount == amountMax) {
      sentenceIndex = 4;
    } else if (amount >= amountMax * 75 / 100) {
      sentenceIndex = 3;
    } else if (amount >= amountMax / 2) {
      sentenceIndex = 2;
    } else if (amount >= amountMax / 4) {
      sentenceIndex = 1;
    }

    let sentence = SENTENCES[sentenceIndex][Math.floor(Math.random() * 6)]

    return sentence;
  }
}
