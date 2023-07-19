import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUserLoggedIn());
  userLoggedIn: Observable<boolean> = this.userLoggedInSubject.asObservable();

  constructor() {}

  private isUserLoggedIn(): boolean {
    if (this.getUser())
      return true;
    return false
  }

  public loginUser() {
    this.userLoggedInSubject.next(true);
  }

  public logoutUser() {
    this.userLoggedInSubject.next(false);
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

  public deleteUser() : void {
    localStorage.removeItem('user')
  }


}
