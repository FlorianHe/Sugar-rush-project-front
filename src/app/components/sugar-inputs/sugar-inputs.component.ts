import { Component, Input } from '@angular/core';
import { SugarMeterApiService } from 'src/app/services/sugar-meter-api.service';
import { Profile } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'app-sugar-inputs',
  templateUrl: './sugar-inputs.component.html',
  styleUrls: ['./sugar-inputs.component.scss']
})
export class SugarInputsComponent {

  @Input()
  public profile!: Profile;

  sugarDataAmounts: number[] = [1, 2, 3, 5, 10];

  @Input()
  public sugarDatas!: number;

  constructor(private sugarMeterService: SugarMeterApiService) {}

  createSugarData(amount: number) {
    const sugarData = { id: 0, amount: amount, profile: this.profile };
    this.sugarMeterService.addSugarData(sugarData).subscribe();
  }
}
