import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { UserCredentials } from '../user_credentials';
import { VendorData } from '../vendordata';
import { VendorDataService } from '../vendordata.service';

@Component({
  selector: 'app-vendorsaved',
  templateUrl: './vendorsaved.component.html',
  styleUrls: ['./vendorsaved.component.css']
})
export class VendorsavedComponent implements OnInit, OnDestroy {

  @Input() vendorSelected;
  currentUser: UserCredentials;
  vendorId: number = null;
  private sub: Subscription;
  vendorData: VendorData = null;
  userToBeDisplayed: UserCredentials;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private vendorDataService: VendorDataService) { }

  ngOnInit(): void {
    this.loadState();
    if(this.vendorSelected){
      this.userToBeDisplayed = this.vendorSelected;
    }else{
      this.userToBeDisplayed = this.currentUser;
    }
    // this.sub = this.activatedRoute.params.subscribe(params =>{
    //   this.vendorId = parseInt(params['id']);
    //   this.vendorDataService.findOne(this.vendorId).pipe(
    //     map((vendorData: VendorData) => this.vendorData = vendorData)
    //   ).subscribe()
    // })
  }

  ngOnDestroy(){
  }

  btnClick () {
  this.router.navigate(['/chat']);
};

time() {
  this.router.navigate(['/calendar']);
};
loadState(){
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  console.log(this.currentUser)
}



}
