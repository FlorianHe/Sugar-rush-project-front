import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { UsersApiService } from 'src/app/services/users-api.service';
import { User } from 'src/app/shared/interfaces/user';
import { confirmPasswordValidator, emailValidator, passwordValidator } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-user-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    firstname: [''],
    lastname: [''],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, passwordValidator]],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  public user!: User | null;

  constructor(private userService: UserService, private usersApiService: UsersApiService, private fb: FormBuilder, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
   this.user = this.userService.getUser();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ConnectionComponent, {
      duration: 1000,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition,
    });
  }

  login(): void {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;
    this.usersApiService.login(email, password).subscribe((response) => {
      this.userService.setToken(response.token);
      this.userService.setUser(response.user);
      this.userService.loginUser(response.user.username);
      this._snackBar.open('Vous êtes connecté !', "Fermer");
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
      this._snackBar.open('Vous êtes inscrit !', "Fermer");
    });
  }

}
