import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(this.userExists());
  user: Observable<User | null> = this.userSubject.asObservable();

  constructor() {}

  private userExists(): User | null {
    return this.getUser();
  }


  public loginUser() {
    this.userSubject.next(this.getUser() as User);
  }

  public logoutUser() {
    this.userSubject.next(null);
    this.deleteToken();
    this.deleteUser();
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return null;
  }

  public deleteToken(): void {
    localStorage.removeItem('token');
  }

  public getUser(): User | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

  public setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public deleteUser(): void {
    localStorage.removeItem('user')
  }

  public updateUser(user: User): void {
    this.setUser(user);
    this.loginUser();
  }
}
