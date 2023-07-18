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

  constructor(private fb: FormBuilder, private sugarMeterService: SugarMeterApiService) {}

  profileModificationForm = this.fb.group({
    name: ['', [Validators.required]],
    birthDate: [new Date(), [Validators.required]],
    logo: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.profileModificationForm.valid && this.profileModificationForm.dirty) {
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
