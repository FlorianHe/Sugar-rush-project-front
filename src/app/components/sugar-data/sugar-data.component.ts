import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AgeCalculatorService } from 'src/app/services/age-calculator.service';
import { SugarMeterApiService } from 'src/app/services/sugar-meter-api.service';
import { Profile } from 'src/app/shared/interfaces/profile';
import { SugarData } from 'src/app/shared/interfaces/sugarData';

@Component({
  selector: 'app-sugar-data',
  templateUrl: './sugar-data.component.html',
  styleUrls: ['./sugar-data.component.scss']
})
export class SugarDataComponent implements OnInit {

  // @ViewChildren('svgElement') svgElements!: QueryList<ElementRef>;

  // getSvgElements(): HTMLElement[] {
  //   return this.svgElements.map((svgElement: ElementRef) => svgElement.nativeElement);
  // }

  @Input()
  public profile!: Profile;
  private _age!: number;

  @Input()
  public sugarDatas!: number;

  constructor(private sugarMeterService: SugarMeterApiService, private ageCalculatorService: AgeCalculatorService) {}

  ngOnInit(): void {
    this._age = this.ageCalculatorService.calculateAge(this.profile.birthDate);
  }

  get age(): number {
    return this._age;
  }
}


