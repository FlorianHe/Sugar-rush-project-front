import { Component, Input, OnInit } from '@angular/core';
import { AgeCalculatorService } from 'src/app/services/age-calculator.service';
import { SugarMeterApiService } from 'src/app/services/sugar-meter-api.service';
import { Profile } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'app-sugar-data',
  templateUrl: './sugar-data.component.html',
  styleUrls: ['./sugar-data.component.scss']
})
export class SugarDataComponent implements OnInit {

  @Input()
  public profile!: Profile;
  private _age!: number;
  public grid!:number;
  @Input()
  public sugarDatas!: number;

  constructor(private ageCalculatorService: AgeCalculatorService) {}

  ngOnInit(): void {
    this._age = this.ageCalculatorService.calculateAge(this.profile.birthDate);
    if (this.age < 6) {
      this.grid = 5;
    } else if (this.age <= 10 && this.age >= 6) {
      this.grid = 6;
    } else if (this.age > 10) {
      this.grid = 7;
    }
  }

  get age(): number {
    return this._age;
  }
}


