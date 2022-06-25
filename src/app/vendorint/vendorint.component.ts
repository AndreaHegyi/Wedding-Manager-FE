import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredentials } from '../user_credentials';
import { VendorData } from '../vendordata';
import { VendorDataService } from '../vendordata.service';


@Component({
  selector: 'app-vendorint',
  templateUrl: './vendorint.component.html',
  styleUrls: ['./vendorint.component.css']
})
export class VendorintComponent implements OnInit {
  url='';
  url2='';
  incorrectCredentials = false;
  public currentUser: UserCredentials;
  showSelectedVendor = false;
  
  constructor(private router: Router,  private _activatedRoute: ActivatedRoute
    , private vendorService: VendorDataService) { 
  }

  ngOnInit(): void {
    this.loadState();
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

btnClick() {
  this.router.navigate(['/chat']);
};

time(){
  this.router.navigate(['/calendar']);
};

saveChanges(vendorForm: NgForm){
  console.log(vendorForm.value);
  this.incorrectCredentials = false;
  console.log(this.currentUser);
  this.currentUser.vendorData.vendorName = vendorForm.value.vendorName;
  this.currentUser.vendorData.vendorEmail = vendorForm.value.vendorEmail;
  this.currentUser.vendorData.vendorPhone = vendorForm.value.vendorPhone;
  this.currentUser.vendorData.vendorLocation = vendorForm.value.vendorLocation;
  this.currentUser.vendorData.vendorDescription = vendorForm.value.vendorDescription;
  this.currentUser.vendorData.vendorImageURL = vendorForm.value.vendorImageURL;
  this.saveState();
  this.vendorService.updateUser(this.currentUser.vendorData).subscribe(
    (response: VendorData) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  this.router.navigate(['/vendorsaved']);
}

saveState(){
  localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
}



loadState(){
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  console.log(this.currentUser)
}

}



