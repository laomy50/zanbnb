import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkerComponent } from './linker/linker/linker.component';
import { LandingComponent } from './web/landing/landing.component';
import { LoginComponent } from './forms/login/login.component';
import { RegComponent } from './forms/reg/reg.component';
import { ZanbnbComponent } from './dashboard/zanbnb/zanbnb.component';
import { HelpsComponent } from './dashboard/pages/helps/helps.component';


const routes: Routes = [
  {path:'',component:LinkerComponent,
  children:[
    {path:'',component:LandingComponent},

  ]
},
{path:'login',component:LoginComponent},
{path:'reg',component:RegComponent},

{path:'memberArea',component:ZanbnbComponent,
children:[
  {path:'help',component:HelpsComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
