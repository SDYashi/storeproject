import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreLoginComponent } from './store-login/store-login.component';
import { StoreViewReportsv1Component } from './store-view-reportsv1/store-view-reportsv1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreReportsV1Component } from './store-reports-v1/store-reports-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreLoginComponent,
    StoreViewReportsv1Component,
    StoreReportsV1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
