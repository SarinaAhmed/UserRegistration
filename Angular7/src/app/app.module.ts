import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule}from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './user.service';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
