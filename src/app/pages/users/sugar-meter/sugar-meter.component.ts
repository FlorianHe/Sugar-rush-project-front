import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Profile } from 'src/app/shared/interfaces/profile';
import { LOGOS } from 'src/app/shared/globals/sugar-meter';
import { UsersApiService } from 'src/app/services/users-api.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/interfaces/user';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { Router } from '@angular/router';
import { Logo } from 'src/app/shared/interfaces/logo';

@Component({
  selector: 'app-sugar-meter',
  templateUrl: './sugar-meter.component.html',
  styleUrls: ['./sugar-meter.component.scss'],
})
export class SugarMeterComponent implements OnInit {

  private _profiles!: Profile[];

  public logos = LOGOS;

  public user = this.userService.getUser() as User;

  guardUser = this.userService.user;

  constructor(private router: Router, private snackBarService: SnackBarService, private usersApiService: UsersApiService, private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.guardUser.subscribe((value) => {
      if (value == null) {
        this.router.navigate([APP_ROUTES.notFound]);
      }
    })

    this.usersApiService.getProfilesByUserId(this.user.id)
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
      this.usersApiService.addProfile(this.user.id, profile).subscribe(
        () => {
          this.usersApiService.getProfilesByUserId(this.user.id)
            .subscribe(profiles => {
              this._profiles = profiles;
            });
          this.snackBarService.openSnackBar('Profil ' + profile.name + ' créé !', 'Fermer');
        });
      this.profileCreationForm.reset();
    }
  }

  onProfilesUpdated(event: Boolean) {
    if (event)
      this.usersApiService.getProfilesByUserId(this.user.id)
        .subscribe(profiles => {
          this._profiles = profiles;
        });
  }

  isSelected(logoValue: string): boolean {
    return this.profileCreationForm.get('logo')?.value === logoValue;
  }

  selectLogo(logo: Logo): void {
    this.profileCreationForm.get('logo')?.setValue(logo.value);
  }

  get profiles(): Profile[] {
    return this._profiles;
  }
}
