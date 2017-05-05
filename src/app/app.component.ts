import { Component } from '@angular/core';
import { ProductService} from './product.service';
import { Response } from '@angular/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private productService: ProductService) {}//to inject the ProductService component
  onGet(){
   return this.productService.getProducts().subscribe(
     (response: Response) => { // import Response from @angular/http
       const data = response.json(); //looks in the body property, gets the data from there and turns it into a Javascript object
       console.log(data);
     },
     (error) => console.log(error)
   );
  };
}
