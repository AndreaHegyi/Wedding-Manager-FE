import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerint',
  templateUrl: './customerint.component.html',
  styleUrls: ['./customerint.component.css']
})
export class CustomerintComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick= function () {
    this.router.navigate(['/chat']);
  };
  
  time= function () {
    this.router.navigate(['/calendar']);
  };
}
