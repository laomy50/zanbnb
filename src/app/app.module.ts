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
import {MatCardModule} from '@angular/material/card';
import { AssestsComponent } from './assets/assests/assests.component';
import { RegComponent } from './forms/reg/reg.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZanbnbComponent } from './dashboard/zanbnb/zanbnb.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HelpsComponent } from './dashboard/pages/helps/helps.component';
import { DashComponent } from './dashboard/pages/dash/dash.component';
import { TripComponent } from './dashboard/pages/trip/trip.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { AccountComponent } from './dashboard/pages/account/account.component';
import { MessageComponent } from './dashboard/pages/message/message.component';
import { NotificationComponent } from './dashboard/pages/notification/notification.component';
import { WatchlistComponent } from './dashboard/pages/watchlist/watchlist.component';
import { UploadComponent } from './dashboard/pages/upload/upload.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    NavComponent,
    LinkerComponent,
    LandingComponent,
    LoginComponent,
    AssestsComponent,
    RegComponent,
    ZanbnbComponent,
    HelpsComponent,
    DashComponent,
    TripComponent,
    HomeComponent,
    AccountComponent,
    MessageComponent,
    NotificationComponent,
    WatchlistComponent,
    UploadComponent,

   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    NgbModalModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
