import { Injectable } from '@angular/core';
import { SUGAR_RUSH_API } from '../shared/globals/api';
import { User } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private HttpClient : HttpClient) { }

  public login(credentials: any): Observable<any> {
    return this.HttpClient.get<any>(`${SUGAR_RUSH_API.baseApi}/login.php`, credentials);
  }

  public getUser(id : number) {
    return this.HttpClient.get<User>(SUGAR_RUSH_API.baseUsers+id);
  }
}
