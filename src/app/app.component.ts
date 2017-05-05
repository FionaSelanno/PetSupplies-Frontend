import { Component } from '@angular/core';
import { ProductService} from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private productService: ProductService) {}//to inject the ProductService component
  onGet(){
   return this.productService.getProducts().subscribe(
     (response) => console.log(response),
     (error) => console.log(error)
   );
  };
}
