import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LaboratoriesComponent } from './components/laboratories/laboratories.component';


//services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FirebaseService } from './services/firebase.service';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LaboratoriesComponent,
    LaboratoryComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
