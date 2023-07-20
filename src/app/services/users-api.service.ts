import { Injectable } from '@angular/core';
import { SUGAR_RUSH_API } from '../shared/globals/api';
import { User } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private HttpClient: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    return this.HttpClient.post<any>(`${SUGAR_RUSH_API.baseApi}/login`, {email, password});
  }

  public register(user: User): Observable<any> {
    return this.HttpClient.post<any>(`${SUGAR_RUSH_API.baseApi}/register`, user);
  }

  public getUser(id: number) {
    return this.HttpClient.get<User>(SUGAR_RUSH_API.baseUsers + "/" + id);
  }

  public updateUser(user: User) {
    return this.HttpClient.put<User>(SUGAR_RUSH_API.baseUsers + "/" + user.id, user);
  }
}
