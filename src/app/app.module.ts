import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CoolStorageModule } from 'angular2-cool-storage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from "./productList/productList.component";
import { ShoppingcartComponent } from "./shoppingcart/shoppingcart.component";
import { ProductService } from "./product.service";
import { CustomerService } from "./customer.service";

const appRoutes: Routes = [
  { path: 'webshop/products', component: ProductListComponent },
  { path: 'webshop/shoppingcart', component: ShoppingcartComponent},
  { path: '', redirectTo: 'webshop/products', pathMatch: 'full' },
  { path: '**', redirectTo: 'webshop/products', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CoolStorageModule.forRoot()
  ],
  providers: [ProductService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
