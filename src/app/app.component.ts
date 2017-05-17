import { Component, OnInit } from '@angular/core';
import { ProductService} from './product.service';
import { Product} from './models/product.model';
import { CustomerService } from 'app/customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  products: Product[] = this.cs.productArray;

  constructor(private cs: CustomerService){}


}
