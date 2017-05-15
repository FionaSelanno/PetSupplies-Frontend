import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product.service";
import { CustomerService } from "app/customer.service";
@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit{
    productList = [];
    productArray = [];
    totalPrice = 0;

  constructor(private ps: ProductService, private cs: CustomerService) {}//to inject the ProductService component
  ngOnInit(){this.getProducts()};
  
  getProducts(){
   return this.ps.getProducts().subscribe(

     (products: any[]) => {console.log(products);
     this.productList = products}, // import Response from @angular/http
     (error) => console.log(error)
   );
  };

  // test(){
  //   return this.cs.totalAmount().subscribe(
  //     (x: any) => {this.totalPrice = x }, (error) => console.log(error)
  //   );
  // }

onAddProduct(product){
  this.cs.addProducts(product);
  console.log("price" + this.totalPrice)
}
  // addProductToCart(product){
  //   this.cs.addedProducts(product);
  //   this.totalAmount();
  // };

  // totalAmount(){
  //   this.totalPrice = this.cs.totalPrice
  // };
}
  