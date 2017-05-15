import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product.service";
import { CustomerService } from "app/customer.service";
@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit{
    products = [];
    productArray = [];
    totalPrice = 0;

  constructor(private ps: ProductService, private cs: CustomerService) {}//to inject the ProductService component
  ngOnInit(){this.getProducts()};
  
  getProducts(){
   return this.ps.getProducts().subscribe(

     (products: any[]) => {console.log(products);
     this.products = products}, // import Response from @angular/http
     (error) => console.log(error)
   );
  };

  addProductToCart(product){
    this.cs.addedProducts(product);
    this.totalAmount();
  };

  totalAmount(){
    this.totalPrice = this.cs.totalPrice
  };
}
  