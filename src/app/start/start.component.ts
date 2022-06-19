import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToRegister= function () {
    this.router.navigate(['/home']);
  };

  goToLogin= function () {
    this.router.navigate(['localhost:8080/login']);
  };
}
