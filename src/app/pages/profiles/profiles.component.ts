import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SugarDataComponent } from 'src/app/components/sugar-data/sugar-data.component';
import { SugarMeterApiService } from 'src/app/services/sugar-meter-api.service';
import { Profile } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {

  @Input()
  public profile!: Profile;

  public logos = [
    { label: 'Gauffre', value: 'waffle' },
    { label: 'Sucre', value: 'sugar' },
    { label: 'Glace', value: 'ice-cream' },
    { label: 'Muffin', value: 'cupcake' },
  ];

  constructor(private fb: FormBuilder, private sugarMeterService: SugarMeterApiService) {}

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
}
