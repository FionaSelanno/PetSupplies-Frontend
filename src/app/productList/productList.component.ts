import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ProductService } from "app/product.service";
import { CustomerService } from "app/customer.service";
import { Product } from "../models/product.model";
import { Observable, Subscription } from "rxjs";
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit {
  subscription: Subscription;
  products: Product[] = []; //all products from database
  productsInCart = [];
  totalPrice = 0;
  private subject = new Subject<any>();

  constructor(private ps: ProductService, private cs: CustomerService) { 
    this.subscription = this.cs.getMessage()
    .subscribe(response => { 
        this.productsInCart = response.products;
        this.totalAmount()
        console.log(this.productsInCart) });  
  }//to inject the ProductService component

  ngOnInit() { 
    this.getProducts();
    this.cs.sessionAddProducts();
   };

  getProducts() {
    return this.ps.getProducts().subscribe(

      (products: any[]) => {
        console.log(products);
        this.products = products
      }, // import Response from @angular/http
      (error) => console.log(error)
    );
  };

  addProductToCart(product) {
    this.cs.addedProducts(product);
    this.totalAmount();
  };

  totalAmount() {
    var totalAmount = 0;
    for (let pr of this.productsInCart) {
      totalAmount = totalAmount + pr.price;
    }
    console.log(totalAmount);
    this.totalPrice = totalAmount;
  };
}
