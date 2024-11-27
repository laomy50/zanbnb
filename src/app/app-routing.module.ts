import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkerComponent } from './linker/linker/linker.component';
import { LandingComponent } from './web/landing/landing.component';
import { LoginComponent } from './forms/login/login.component';
import { RegComponent } from './forms/reg/reg.component';
import { ZanbnbComponent } from './dashboard/zanbnb/zanbnb.component';
import { HelpsComponent } from './dashboard/pages/helps/helps.component';
import { AccountComponent } from './dashboard/pages/account/account.component';
import { DashComponent } from './dashboard/pages/dash/dash.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { MessageComponent } from './dashboard/pages/message/message.component';
import { NotificationComponent } from './dashboard/pages/notification/notification.component';
import { WatchlistComponent } from './dashboard/pages/watchlist/watchlist.component';
import { UploadComponent } from './dashboard/pages/upload/upload.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MyordersComponent } from './clientcomponent/myorders/myorders.component';
import { AllpackagesComponent } from './staffcomponent/allpackages/allpackages.component';
import { UsermanagementComponent } from './staffcomponent/usermanagement/usermanagement.component';
import { AllordersComponent } from './staffcomponent/allorders/allorders.component';
import { NewsdetailsComponent } from './news/newsdetails/newsdetails.component';



const routes: Routes = [
  {path:'',component:LinkerComponent,
  children:[
    {path:'',component:LandingComponent},
    {path:'news',component:NewsdetailsComponent}

  ]
},
{path:'login',component:LoginComponent},
{path:'reg',component:RegComponent},

{path:'memberArea',component:ZanbnbComponent,
children:[
  {path:'',component:DashComponent},
  {path:'help',component:HelpsComponent},
  {path:'account',component:AccountComponent},
  {path:'dash',component:DashComponent},
  {path:'home',component:HomeComponent},
  {path:'message',component:MessageComponent},
  {path:'orders',component:NotificationComponent},
  {path:'watchlist',component:WatchlistComponent},
  {path:'upload',component:UploadComponent},
  {path:'myorders',component:MyordersComponent},
  {path:'allpackages',component:WatchlistComponent},
  {path:'usermanagement',component:UsermanagementComponent},
  {path:'allorders',component:AllordersComponent},
]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
