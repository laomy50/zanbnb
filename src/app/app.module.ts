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
import { HomeComponent } from './dashboard/pages/home/home.component';
import { AccountComponent } from './dashboard/pages/account/account.component';
import { MessageComponent } from './dashboard/pages/message/message.component';
import { NotificationComponent } from './dashboard/pages/notification/notification.component';
import { WatchlistComponent } from './dashboard/pages/watchlist/watchlist.component';
import { UploadComponent } from './dashboard/pages/upload/upload.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { DragDirective } from './drag.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { ShoppComponent } from './dashboard/pages/uploads/shopp/shopp.component';
import { SpiciesComponent } from './dashboard/pages/uploads/spicies/spicies.component';
import { RestaurantComponent } from './dashboard/pages/uploads/restaurant/restaurant.component';
import { HotelComponent } from './dashboard/pages/uploads/hotel/hotel.component';
import { HistoricalComponent } from './dashboard/pages/uploads/historical/historical.component';
import { SportComponent } from './dashboard/pages/uploads/sport/sport.component';
import { TransportComponent } from './dashboard/pages/uploads/transport/transport.component';
import { ForestComponent } from './dashboard/pages/uploads/forest/forest.component';
import { BeachComponent } from './dashboard/pages/uploads/beach/beach.component';
import { TripsComponent } from './dashboard/pages/uploads/trips/trips.component';
import { ShowRentsComponent } from './packages/show-rents/show-rents.component';
import { ShowTripsComponent } from './packages/show-trips/show-trips.component';
import { ShowTransportsComponent } from './packages/show-transports/show-transports.component';
import { ShowSportsComponent } from './packages/show-sports/show-sports.component';
import { ShowSpiciesComponent } from './packages/show-spicies/show-spicies.component';
import { ShowShoppComponent } from './packages/show-shopp/show-shopp.component';
import { ShowRestaurantComponent } from './packages/show-restaurant/show-restaurant.component';
import { ShowHotelComponent } from './packages/show-hotel/show-hotel.component';
import { ShowHistoricalComponent } from './packages/show-historical/show-historical.component';
import { ShowForestsComponent } from './packages/show-forests/show-forests.component';
import { ShowBeachesComponent } from './packages/show-beaches/show-beaches.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ShoppListComponent } from './dashboard/pages/watchlist/shopp-list/shopp-list.component';
import { BeachListComponent } from './dashboard/pages/watchlist/beach-list/beach-list.component';
import { ForestListComponent } from './dashboard/pages/watchlist/forest-list/forest-list.component';
import { HistoricalListComponent } from './dashboard/pages/watchlist/historical-list/historical-list.component';
import { HotelListComponent } from './dashboard/pages/watchlist/hotel-list/hotel-list.component';
import { RentsListComponent } from './dashboard/pages/watchlist/rents-list/rents-list.component';
import { RestaurantListComponent } from './dashboard/pages/watchlist/restaurant-list/restaurant-list.component';
import { SpiceListComponent } from './dashboard/pages/watchlist/spice-list/spice-list.component';
import { SportListComponent } from './dashboard/pages/watchlist/sport-list/sport-list.component';
import { TransportListComponent } from './dashboard/pages/watchlist/transport-list/transport-list.component';
import { TripsListComponent } from './dashboard/pages/watchlist/trips-list/trips-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RentOrderComponent } from './dashboard/pages/home/rent-order/rent-order.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeachOrderComponent } from './dashboard/pages/home/beach-order/beach-order.component';
import { ForestOrderComponent } from './dashboard/pages/home/forest-order/forest-order.component';
import { HistoricalOrderComponent } from './dashboard/pages/home/historical-order/historical-order.component';
import { HotelOrderComponent } from './dashboard/pages/home/hotel-order/hotel-order.component';
import { RestaurantOrderComponent } from './dashboard/pages/home/restaurant-order/restaurant-order.component';
import { ShoppOrderComponent } from './dashboard/pages/home/shopp-order/shopp-order.component';
import { SpiciesOrderComponent } from './dashboard/pages/home/spicies-order/spicies-order.component';
import { SportOrderComponent } from './dashboard/pages/home/sport-order/sport-order.component';
import { TransportOrderComponent } from './dashboard/pages/home/transport-order/transport-order.component';
import { TripOrderComponent } from './dashboard/pages/home/trip-order/trip-order.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


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
    HomeComponent,
    AccountComponent,
    MessageComponent,
    NotificationComponent,
    WatchlistComponent,
    UploadComponent,
    DragDirective,
    ShoppComponent,
    SpiciesComponent,
    RestaurantComponent,
    HotelComponent,
    HistoricalComponent,
    SportComponent,
    TransportComponent,
    ForestComponent,
    BeachComponent,
    TripsComponent,
    ShowRentsComponent,
    ShowTripsComponent,
    ShowTransportsComponent,
    ShowSportsComponent,
    ShowSpiciesComponent,
    ShowShoppComponent,
    ShowRestaurantComponent,
    ShowHotelComponent,
    ShowHistoricalComponent,
    ShowForestsComponent,
    ShowBeachesComponent,
    ShoppListComponent,
    BeachListComponent,
    ForestListComponent,
    HistoricalListComponent,
    HotelListComponent,
    RentsListComponent,
    RestaurantListComponent,
    SpiceListComponent,
    SportListComponent,
    TransportListComponent,
    TripsListComponent,
    RentOrderComponent,
    BeachOrderComponent,
    ForestOrderComponent,
    HistoricalOrderComponent,
    HotelOrderComponent,
    RestaurantOrderComponent,
    ShoppOrderComponent,
    SpiciesOrderComponent,
    SportOrderComponent,
    TransportOrderComponent,
    TripOrderComponent,

   
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
    MatOptionModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDialogModule,
    CarouselModule.forRoot(),
    NgbModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
