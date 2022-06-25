import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserCredentials} from './user_credentials';
import {environment} from '../environments/environment';
import { VendorData } from './vendordata';

@Injectable({
  providedIn: 'root'
})
export class UserCredentialsService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  
  public register(user: UserCredentials, vendorData: VendorData): Observable<UserCredentials>{
    user.vendorData = vendorData;
    return this.http.post<UserCredentials>(`${this.apiServerUrl}/api/v1/registration`, user);
  }

  public confirm(token: string): Observable<void>{
    return this.http.get<void>(`${this.apiServerUrl}/api/v1/registration/confirm?token=${token}`);
  }

  public getUsers(): Observable<UserCredentials[]>{
    return this.http.get<UserCredentials[]>(`${this.apiServerUrl}/api/v1/registration/all`);
  }

  public findUser(userId: number): Observable<UserCredentials>{
    return this.http.get<UserCredentials>(`${this.apiServerUrl}/api/v1/registration/find/${userId}`);
  }
  
}
