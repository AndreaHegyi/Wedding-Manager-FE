import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vendorint',
  templateUrl: './vendorint.component.html',
  styleUrls: ['./vendorint.component.css']
})
export class VendorintComponent implements OnInit {
  url='';
  url2='';
  
  constructor(private router: Router,  private _activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
 }

 readUrl2(event:any) {
  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
          this.url2 = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
  }
}

btnClick= function () {
  this.router.navigate(['/chat']);
};

time= function () {
  this.router.navigate(['/calendar']);
};

}



