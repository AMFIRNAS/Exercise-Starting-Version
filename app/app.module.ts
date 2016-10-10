import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneDetailComponent } from './phones/phone-detail.component';

import { PhoneService} from './phones/phones.service';
import { AuthService } from './auth.service';

import { appRoutingProviders, routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PhonesComponent,
    PhoneDetailComponent
  ],
  providers: [
    PhoneService, AuthService, appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
