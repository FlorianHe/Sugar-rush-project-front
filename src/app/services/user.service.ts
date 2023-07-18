import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { UsersApiService } from './users-api.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private usersApiService: UsersApiService) {}

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }


  public getUser(): User | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

}
