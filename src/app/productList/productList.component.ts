import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product.service";

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit{
    products = [];
    productArray = [];
    totalPrice = 0;
    

  constructor(private productService: ProductService) {}//to inject the ProductService component
  ngOnInit(){this.getProducts()};
  
  getProducts(){
   return this.productService.getProducts().subscribe(

     (products: any[]) => {console.log(products);
     this.products = products}, // import Response from @angular/http
     (error) => console.log(error)
   );
  };

  addProductToCart(product){
    this.productArray.push(product);
    console.log(this.productArray.length);
    for (let pr of this.productArray){
    console.log(pr.price)
    console.log(this.totalPrice =this.totalPrice + pr.price)
      
    }
  }; 
}
  