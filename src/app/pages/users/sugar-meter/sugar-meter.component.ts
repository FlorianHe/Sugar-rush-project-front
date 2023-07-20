import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SugarMeterApiService } from 'src/app/services/sugar-meter-api.service';
import { Profile } from 'src/app/shared/interfaces/profile';
import { LOGOS } from 'src/app/shared/globals/sugar-meter';

@Component({
  selector: 'app-sugar-meter',
  templateUrl: './sugar-meter.component.html',
  styleUrls: ['./sugar-meter.component.scss'],
})
export class SugarMeterComponent implements OnInit {

  private _profiles!: Profile[];

  public logos = LOGOS;

  constructor(public sugarMeterService: SugarMeterApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sugarMeterService.getProfiles()
      .subscribe(profiles => {
        this._profiles = profiles;
      });
  }

  profileCreationForm = this.fb.group({
    name: ['', [Validators.required]],
    birthDate: [new Date(), [Validators.required]],
    logo: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.profileCreationForm.valid && this.profileCreationForm.dirty) {
      const profile = {
        id: 0,
        name: this.profileCreationForm.value.name!,
        birthDate: this.profileCreationForm.value.birthDate!,
        logo: this.profileCreationForm.value.logo!
      };
      this.sugarMeterService.addProfile(profile).subscribe();
    }
  }

  get profiles(): Profile[] {
    return this._profiles;
  }

  // fixHeight() {
  //   const description = document.getElementById('meter-description-text');
  //   const box = document.getElementById('meter-description');
  //   const title = document.getElementById('meter-description-title');
  //   let height = title!.getBoundingClientRect().height + description!.getBoundingClientRect().height;
  //   box!.style.height = height + 'px';
  // }

  // async slideDescription() {
  //   const description = document.getElementById('meter-description-text');
  //   const box = document.getElementById('meter-description');
  //   const title = document.getElementById('meter-description-title');
  //   if (description?.style.transform === 'translateY(-100%)') {
  //     let height = title!.getBoundingClientRect().height + description.getBoundingClientRect().height;
  //     box!.style.height = height + 'px';
  //     description.style.transform = 'translateY(0%)';
  //     description.style.visibility = 'visible';
  //   } else {
  //     let height = title!.getBoundingClientRect().height;
  //     description!.style.transform = 'translateY(-100%)';
  //     description!.style.visibility = 'hidden';
  //     box!.style.height = height + 'px';
  //   }
  // }
}
