import { Observable } from 'rxjs';
import { Movie } from './models/Movie';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    AddProductComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
 FormsModule,
  ReactiveFormsModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
