import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

// import { NgbdModalComponent } from '../app/components/modal/modal.component';
//  import { RegisterComponent } from './register/egister.component'';
import { HomeModule } from './home/home.module';
import { RegisterComponent } from './register/register.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
 import { MyDirective } from './directives/onfocusdirective';
import { AuthenticationService } from 'app/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent, 
    DashboardComponent,
     RegisterComponent,
     SiteLayoutComponent,
  MyDirective
 
  ],
  // entryComponents: [NgbdModalContent],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
