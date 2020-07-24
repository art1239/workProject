import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
 component:HomeComponent,
 path:''
 
},

 {
 component:ProductsComponent,
 path:'product'},
 {
  component:DetailsComponent,
  path:'product/:id'},

 {
  component:AddProductComponent,
  path:'add'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
