import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UsersApiService } from 'src/app/services/users-api.service';
import { User } from 'src/app/shared/interfaces/user';
import { confirmPasswordValidator, emailValidator, passwordValidator, anotherConfirmPasswordValidator } from 'src/app/shared/validators/validators';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-user-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {

  userForm: FormGroup = this.fb.group({
    // firstname: [''],
    // lastname: [''],
    username: ['nana@nana.fr', [Validators.required]],
    email: ['nana@nana.fr', [Validators.required, emailValidator]],
    password: ['', [Validators.required, passwordValidator, anotherConfirmPasswordValidator]],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
  });

  public user!: User | null;

  constructor(private userService: UserService, private usersApiService: UsersApiService, private fb: FormBuilder, private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  login(): void {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;
    this.usersApiService.login(email, password).subscribe((response) => {
      this.userService.setToken(response.token);
      this.userService.setUser(response.user);
      this.userService.loginUser();
      this.snackBarService.openSnackBar('Vous êtes connecté !', "Fermer");
    },
      error => {
        this.snackBarService.openSnackBar('Vos identifiants sont incorrects, veuillez réessayer', "Fermer");
      });
  }


  register(): void {
    const user: User = {
      id: 0,
      firstName: this.userForm.value.firstname,
      lastName: this.userForm.value.lastname,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
    };
    this.usersApiService.register(user).subscribe(() => {
      this.snackBarService.openSnackBar('Vous êtes inscrit !', "Fermer");
    });
  }

}
