import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
import { StoreLoginComponent } from './store-login/store-login.component';
import { StoreViewReportsv1Component } from './store-view-reportsv1/store-view-reportsv1.component';
import { StoreGenerateReportsv1Component } from './store-generate-reportsv1/store-generate-reportsv1.component';

const routes: Routes = [
  { path: '', redirectTo: '/store-generate-reports', pathMatch: 'full' },
  { path:'store-dashboard', component:StoreDashboardComponent}, 
  { path:'store-view-reports', component:StoreViewReportsv1Component},   
  { path:'store-generate-reports', component:StoreGenerateReportsv1Component},     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
