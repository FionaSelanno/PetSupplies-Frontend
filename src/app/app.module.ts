import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from "./productList/productList.component";
import { ProductService } from "./product.service";
import { CustomerService } from "./customer.service";

const appRoutes: Routes = [
  { path: 'webshop/products', component: ProductListComponent },
  { path: '', redirectTo: 'webshop/products', pathMatch: 'full' },
  { path: '**', redirectTo: 'webshop/products', pathMatch: 'full'}
  // {patj}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
