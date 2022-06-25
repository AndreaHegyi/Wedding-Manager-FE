import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CustomerintComponent } from './customerint/customerint.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartComponent } from './start/start.component';
import { VendorintComponent } from './vendorint/vendorint.component';
import { VendorsavedComponent } from './vendorsaved/vendorsaved.component';

const routes: Routes = [ 
  {path: 'start', component: StartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'customerint', component: CustomerintComponent},
  {path: 'vendorint', component: VendorintComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'login', component: LoginComponent},
  {path: 'vendorsaved', component: VendorsavedComponent},
  {path: 'vendorsaved/:id', component: VendorsavedComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
