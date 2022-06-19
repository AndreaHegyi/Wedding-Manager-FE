import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CustomerintComponent } from './customerint/customerint.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartComponent } from './start/start.component';
import { VendorintComponent } from './vendorint/vendorint.component';

const routes: Routes = [ 
  {path: 'start', component: StartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'customerint', component: CustomerintComponent},
  {path: 'vendorint', component: VendorintComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
