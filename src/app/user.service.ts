import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  
  public register(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/api/v1/registration`, user);
  }

  public confirm(token: string): Observable<void>{
    return this.http.get<void>(`${this.apiServerUrl}/api/v1/registration/confirm?token=${token}`);
  }

  
  
}
