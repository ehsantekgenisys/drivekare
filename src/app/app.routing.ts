import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';



import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },

    { 
      path: '', 
      component: SiteLayoutComponent,
      children: [
        { path: 'home',             component: HomeComponent },
        { path: 'user-profile',     component: ProfileComponent },
        { path: 'landing',          component: LandingComponent },
        { path: 'nucleoicons',      component: NucleoiconsComponent },
        { path: 'dashboard',      component: DashboardComponent },
      ]
  },
    
    
    { path: 'login',           component: LoginComponent },
    { path: 'register',           component: RegisterComponent },
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
