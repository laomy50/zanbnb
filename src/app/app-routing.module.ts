import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkerComponent } from './linker/linker/linker.component';
import { LandingComponent } from './web/landing/landing.component';

const routes: Routes = [
  {path:'',component:LinkerComponent,
  children:[
    {path:'',component:LandingComponent},
    {}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
