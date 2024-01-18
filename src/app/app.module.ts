import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootComponent } from './linker/foot/foot.component';
import { NavComponent } from './linker/nav/nav.component';
import { LinkerComponent } from './linker/linker/linker.component';
import { LandingComponent } from './web/landing/landing.component';
import { LoginComponent } from './forms/login/login.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    NavComponent,
    LinkerComponent,
    LandingComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
