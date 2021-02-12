import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ViewallComponent } from './viewall/viewall.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"Home"},
  {path:'Home',component:HomeComponent},
  {path:'viewall',component:ViewallComponent},
  {path:'view-details',component:SingleproductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
