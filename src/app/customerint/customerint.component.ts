import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from '../user_credentials';
import { UserCredentialsService } from '../user_credentials.service';

@Component({
  selector: 'app-customerint',
  templateUrl: './customerint.component.html',
  styleUrls: ['./customerint.component.css']
})
export class CustomerintComponent implements OnInit {

  showCustomer = true;
  showSelectedVendor = false;
  currentUser: UserCredentials;
  users: UserCredentials[];
  vendorSelected: UserCredentials;
  
  constructor(private router: Router, private userCredentialsService: UserCredentialsService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userCredentialsService.getUsers().subscribe(
      (registrationResponse: UserCredentials[]) => {
        this.users = registrationResponse;
        console.log(registrationResponse);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  btnClick() {
    this.router.navigate(['/chat']);
  };
  
  time() {
    this.router.navigate(['/calendar']);
  };


  loadState(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  visit(id: number){
    this.userCredentialsService.findUser(id).subscribe(
      (user: UserCredentials) => {
        this.vendorSelected = user;
        this.showCustomer = false;
        this.showSelectedVendor = true;
      }
    )
  }
}
