import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { UsersApiService } from './users-api.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private usersApiService : UsersApiService) { }

  public login(username: string, password: string) : Observable<any> {
    const credentials = {username, password};
    console.log(credentials)
    return this.usersApiService.login(credentials).pipe(
      tap(response => {
        console.log(response)
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  public getUser() : User | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }
}
