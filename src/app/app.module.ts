import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreLoginComponent } from './store-login/store-login.component';
import { StoreGenerateReportsv1Component } from './store-generate-reportsv1/store-generate-reportsv1.component';
import { StoreViewReportsv1Component } from './store-view-reportsv1/store-view-reportsv1.component';
import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StoreLoginComponent,
    StoreGenerateReportsv1Component,
    StoreViewReportsv1Component,
    StoreDashboardComponent
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
