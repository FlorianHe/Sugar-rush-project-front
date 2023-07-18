import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
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


  public user!: User | null;
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  login(): void {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;
    this.userService.login(email, password).subscribe((user) => {
      this.user = user;
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

    this.userService.register(user).subscribe((user) => {
      console.log(user);
    });
  }

}
