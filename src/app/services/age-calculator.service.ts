import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorService {

  constructor() {}

  calculateAge(birthdate: Date): number {
    const today = new Date();
    const birth = new Date(birthdate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
}
