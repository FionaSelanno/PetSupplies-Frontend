import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product.service";

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styles: [`
    p{ 
      color:#5250A3;
      font-size: 20px;
    }
    th{
      color: #66AC05;
    }
  `]
})

export class ProductListComponent implements OnInit{
    products = [];

  constructor(private productService: ProductService) {}//to inject the ProductService component
  ngOnInit(){this.getProducts()};
  
  getProducts(){
   return this.productService.getProducts().subscribe(

     (products: any[]) => {console.log(products);
     this.products = products}, // import Response from @angular/http
     (error) => console.log(error)
   );
  };
}
  