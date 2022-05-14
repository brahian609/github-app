import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BaseRequestService } from '../core/http/base-request.service';
import { AppService } from './services/app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularMaterialModule
  ],
  providers: [BaseRequestService, AppService],
  exports: [AngularMaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
