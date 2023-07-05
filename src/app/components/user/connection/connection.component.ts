import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit{

  userForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],

  });
  public user! : User | null;
  constructor(private userService : UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.user = null;//{id: 1, firstname: 'Florian', lastname : "Helaine"};
    console.log(this.user)
  }

  login() : void {
    console.log("connecté")
  }

}
