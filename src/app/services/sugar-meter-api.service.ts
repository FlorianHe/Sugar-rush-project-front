import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../shared/interfaces/profile';
import { SugarData } from '../shared/interfaces/sugarData';
import { SUGAR_RUSH_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class SugarMeterApiService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  //Temp
  getProfilesByUserId(id: number): Observable<Profile[]> {
    const url = `${SUGAR_RUSH_API.baseUsers}/${id}`;
    return this.http.get<Profile[]>(url);
  }

  //Temp
  getProfiles(): Observable<Profile[]> {
    const url = `${SUGAR_RUSH_API.baseProfiles}`;
    return this.http.get<Profile[]>(url);
  }

  //Will need a user id
  addProfile(profile: Profile): Observable<Profile> {
    const url = `${SUGAR_RUSH_API.baseProfiles}`;
    return this.http.post<Profile>(url, profile);
  }

  updateProfile(id: number, profile: Profile): Observable<Profile> {
    const url = `${SUGAR_RUSH_API.baseProfiles}/${id}`;
    return this.http.put<Profile>(url, profile);
  }

  deleteProfile(id: number): Observable<Profile> {
    const url = `${SUGAR_RUSH_API.baseProfiles}/${id}`;
    return this.http.delete<Profile>(url);
  }

  getSugarDatasByProfileId(): Observable<SugarData[]> {
    const url = `${SUGAR_RUSH_API.baseProfiles}/{id}/sugar-datas`;
    return this.http.get<SugarData[]>(url);
  }

  addSugarData(sugarData: SugarData): Observable<SugarData> {
    const url = `${SUGAR_RUSH_API.baseSugarDatas}`;
    return this.http.post<SugarData>(url, sugarData);
  }
}
