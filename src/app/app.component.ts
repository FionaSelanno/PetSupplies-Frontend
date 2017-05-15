import { Component, OnInit } from '@angular/core';
import { ProductService} from './product.service';
import {CustomerService} from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent implements OnInit{
  products = [];

  constructor( private cs: CustomerService) {}//to inject the ProductService component
  
  ngOnInit(){
    this.products = this.cs.productArray;
  }

 
}
