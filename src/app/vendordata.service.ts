import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {UserCredentials} from './user_credentials';
import {environment} from '../environments/environment';
import { VendorData } from './vendordata';

@Injectable({
  providedIn: 'root'
})
export class VendorDataService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  public updateUser(VendorData: VendorData): Observable<VendorData>{
    return this.http.put<VendorData>(`${this.apiServerUrl}/VendorData/update`, VendorData);
  }

  public addVendorData(): Observable<VendorData>{
    return this.http.post<VendorData>(`${this.apiServerUrl}/VendorData/add`, null);
  }


  findOne(id: number): Observable<VendorData>{
    return this.http.get(`${this.apiServerUrl}/VendorData/find/{id}` + id).pipe(
      map((vendorData: VendorData, id) => vendorData)
    )
  
    }
  }
