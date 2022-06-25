import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { CustomerintComponent } from './customerint/customerint.component';
import { VendorintComponent } from './vendorint/vendorint.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserCredentialsService } from './user_credentials.service';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StartComponent } from './start/start.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MessageComponent } from './message/message.component';
import { ChannelPreviewComponent } from './channel-preview/channel-preview.component';
import { LoginComponent } from './login/login.component';
import { VendorsavedComponent } from './vendorsaved/vendorsaved.component';
import { MbscModule } from '@mobiscroll/angular';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerintComponent,
    VendorintComponent,
    SignUpComponent,
    ChatComponent,
    CalendarComponent,
    ConfirmComponent,
    StartComponent,
    MessageComponent,
    ChannelPreviewComponent,
    LoginComponent,
    VendorsavedComponent,
  ],
  imports: [
    MbscModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslateModule.forRoot(), 
    StreamAutocompleteTextareaModule, 
    StreamChatModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserAnimationsModule
    
  ],
  providers: [UserCredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
