import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserService } from 'src/app/services/user.service';
import { UsersApiService } from 'src/app/services/users-api.service';
import { User } from 'src/app/shared/interfaces/user';
import { emailValidator, passwordValidator } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-user-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {

  userForm: FormGroup = this.fb.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, passwordValidator]],
  });

  deleteButtonClicked: Boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private userApiService: UsersApiService, private snackBarService: SnackBarService, private router: Router) {
  }


  onSubmit() {
    const currentUser = this.userService.getUser() as User;

    if (this.userForm.valid && this.userForm.dirty) {
      if (this.userForm.value.firstName == "") {
        this.userForm.value.firstName = currentUser?.firstName;
      }
      if (this.userForm.value.lastName == "") {
        this.userForm.value.lastName = currentUser?.lastName;
      }
      if (this.userForm.value.email == "") {
        this.userForm.value.email = currentUser?.email;
      }
      if (this.userForm.value.password == "") {
        this.userForm.value.password = currentUser?.password;
      }

      const formData = this.userForm.value;
      const user: User = {
        id: currentUser.id,
        lastName: formData.lastName,
        firstName: formData.firstName,
        email: formData.email,
        password: formData.password,
      };
      
      this.userApiService.updateUser(user).subscribe(() => {
        this.userService.updateUser(user);
        this.userService.loginUser();
        this.userForm.reset();
        this.snackBarService.openSnackBar('Vos informations ont été modifiées !', "Fermer");
      });
      if (this.deleteButtonClicked) {
        this.handleDelete();
        return;
      }
    }
  }

  handleDelete() {
    const currentUser = this.userService.getUser() as User;
    this.onDeletion(currentUser.id);
  }

  onDeletion(userId: number) {
    this.userApiService.deleteUser(userId).subscribe(
      () => {
        this.userService.logoutUser();
        this.snackBarService.openSnackBar('Votre compte a bien été supprimé !', "Fermer");
        this.router.navigate(['/']);
      },
    );
  }
}
