import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserCredentialsService } from '../user_credentials.service';
import { UserCredentials } from '../user_credentials';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  incorrectCredentials = false;
  public users: UserCredentials[];
  public currentUser: UserCredentials;

  constructor(private userCredentialsService: UserCredentialsService, private router: Router) { }

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


  doLogin(loginForm: NgForm): void{
    for(let i=0;i < this.users.length;i++){
      if(this.users[i].email == loginForm.value.email){
        this.currentUser = this.users[i];
        this.incorrectCredentials = false;
        this.saveState();
        if(this.currentUser.appUserRole === "VENDOR"){
        this.router.navigate(['./vendorint']);
      }
        else{
          this.router.navigate(['./customerint']);
        }
      }else{
        this.incorrectCredentials = true;
      }
    }
    console.log(loginForm.value);
    console.log("Current user: ", this.currentUser);
  }

  saveState(){
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

}
