import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private http : HttpClient, public fb: FormBuilder) {
  }

  userForm = this.fb.group({
    roleNameX: ['', [Validators.required]],
  }); 

  public user: User[];
  ngOnInit(): void{
  }

  public addAccount(userForm: NgForm): void{
    var select = (document.getElementById('appUserRole') as HTMLSelectElement).value;
    userForm.value.appUserRole = select;
    console.log(select);
    this.userService.register(userForm.value).subscribe(
      (response: User) =>{
        console.log(response);
        userForm.reset();
      },
      (error: HttpErrorResponse) =>
      {
        console.log(error.message);
        console.log(error);
      }
    );
    this.router.navigate(['./confirm']);
    //console.log('values:', userForm.value.appUserRole)
}

public saveChanges(): boolean{
  var role = (document.getElementById('appUserRole') as HTMLSelectElement).value;
  if(role === "VENDOR"){
    return true;}
  else {
    return false;
  }
}


}