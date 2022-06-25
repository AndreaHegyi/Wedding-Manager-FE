import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UserCredentialsService} from '../user_credentials.service';
import {UserCredentials} from '../user_credentials';
import {Router} from '@angular/router';
import { VendorData } from '../vendordata';
import { VendorDataService } from '../vendordata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private vendorDataService: VendorDataService, private userCredentialsService: UserCredentialsService, private router: Router, private http : HttpClient, public fb: FormBuilder) {
  }

  vendorData: VendorData;

 /*userForm = this.fb.group({
    roleNameX: ['', [Validators.required]],
  }); */

  public user: UserCredentials[];
  
  ngOnInit(): void{
    this.addVendorData();
  }

  public addAccount(userForm: NgForm): void{
    var select = (document.getElementById('appUserRole') as HTMLSelectElement).value;
    userForm.value.appUserRole = select;
    console.log("data",this.vendorData);
    this.userCredentialsService.register(userForm.value, this.vendorData).subscribe(
      (response: UserCredentials) =>{
        console.log(response);
        userForm.reset();
      },
      (error: HttpErrorResponse) =>
      {
        console.log(error.message);
        console.log(error);
      }
    );
    this.confirm();
}

 public addVendorData(){
  this.vendorDataService.addVendorData().subscribe(
    (vendorData: VendorData) => {
      console.log("inside",vendorData)
      this.vendorData = vendorData;
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
      console.log(error);
    });
 }

validateEmail(email) {
 const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return regularExpression.test(String(email).toLowerCase());
}

confirm(){
  this.router.navigate(['./confirm']);
}


}

