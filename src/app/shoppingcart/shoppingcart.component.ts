import { Component } from '@angular/core';
import { Product} from '../models/product.model';
import { CustomerService } from 'app/customer.service';

@Component({
    selector: 'app-shoppingcart',
    templateUrl: './shoppingcart.component.html'
})

export class ShoppingcartComponent {
    products: Product[]=this.cs.productArray;

    constructor(private cs: CustomerService){}

}