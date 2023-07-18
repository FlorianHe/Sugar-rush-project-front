import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { UsersApiService } from './users-api.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private usersApiService : UsersApiService) { }

  public login(email: string, password: string) : Observable<any> {
    const credentials = {email, password};
    return this.usersApiService.login(credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  public register(user: User) : Observable<User> {
    return this.usersApiService.register(user);
  }

  public getUser() : User | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

}
