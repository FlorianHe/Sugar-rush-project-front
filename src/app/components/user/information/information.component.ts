import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserService } from 'src/app/services/user.service';
import { UsersApiService } from 'src/app/services/users-api.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {

  userForm!: FormGroup;

  deleteButtonClicked: Boolean = false;

  user = this.userService.user;
  currentUser: User = this.userService.getUser() as User;

  constructor(private fb: FormBuilder, private userService: UserService, private userApiService: UsersApiService, private snackBarService: SnackBarService, private router: Router) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      lastName: [this.currentUser.lastName],
      firstName: [this.currentUser.firstName],
      email: [this.currentUser.email],
      password: [''],
    });
  }

  onSubmit() {
    const currentUser = this.userService.getUser() as User;
    const user: User = { id: currentUser.id };

    if (this.userForm.valid) {
      if (this.userForm.value.firstName != "" || this.userForm.value.firstName != currentUser.firstName) {
        user.firstName = this.userForm.value.firstName;
      }
      if (this.userForm.value.lastName != "" || this.userForm.value.lastName != currentUser.lastName) {
        user.lastName = this.userForm.value.lastName;
      }
      if (this.userForm.value.email != "" || this.userForm.value.email != currentUser.email) {
        user.email = this.userForm.value.email;
      }
      if (this.userForm.value.password != "") {
        user.password = this.userForm.value.password;
      }

      this.userApiService.updateUser(user).subscribe((updatedUser) => {
        this.userService.updateUser(updatedUser);
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
