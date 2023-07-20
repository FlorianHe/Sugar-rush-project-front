import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private userService: UserService, private userApiService: UsersApiService) {
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
      console.log(user);
      this.userApiService.updateUser(user).subscribe(() => {
        this.userService.updateUser(user);
      });
    }
  }

}
