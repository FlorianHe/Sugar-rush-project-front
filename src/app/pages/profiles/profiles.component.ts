import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SugarMeterApiService } from 'src/app/services/sugar-meter-api.service';
import { LOGOS } from 'src/app/shared/globals/sugar-meter';
import { Profile } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  @Input()
  public profile!: Profile;

  private _sugarDatas!: number;

  public logos = LOGOS;

  constructor(private fb: FormBuilder, private sugarMeterService: SugarMeterApiService) {}

  ngOnInit(): void {
    this.sugarMeterService.getSugarDatasByProfileId(this.profile.id)
      .subscribe(datas => {
        this._sugarDatas = datas;
      });
  }

  profileModificationForm = this.fb.group({
    name: [''],
    birthDate: [new Date()],
    logo: [''],
  });

  onSubmit() {
    if (this.profileModificationForm.valid && this.profileModificationForm.dirty) {
      if (this.profileModificationForm.value.name === '') {
        this.profileModificationForm.value.name = this.profile.name;
      }
      if (this.profileModificationForm.value.birthDate === new Date()) {
        this.profileModificationForm.value.birthDate = this.profile.birthDate;
      }
      if (this.profileModificationForm.value.logo === '') {
        this.profileModificationForm.value.logo = this.profile.logo;
      }
      const profile = {
        id: this.profile.id,
        name: this.profileModificationForm.value.name!,
        birthDate: this.profileModificationForm.value.birthDate!,
        logo: this.profileModificationForm.value.logo!
      };
      this.sugarMeterService.updateProfile(this.profile.id, profile).subscribe();
    }
  }

  onDatasUpdated(event: Boolean) {
    if (event)
      this.sugarMeterService.getSugarDatasByProfileId(this.profile.id)
        .subscribe(datas => {
          this._sugarDatas = datas;
        });
  }

  get sugarDatas(): number {
    return this._sugarDatas;
  }
}
