import { Component } from '@angular/core';
import { Product} from '../models/product.model';
import { CustomerService } from 'app/customer.service';

@Component({
    selector: 'app-shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.css']
})

export class ShoppingcartComponent {
    productsInCart: Product[]=this.cs.productArray;
    totalPriceOrder: number = 0;

    constructor(private cs: CustomerService){
        this.totalAmount();
    }

    deleteProduct(i){
       this.productsInCart.splice(i,1);
       this.totalAmount();
       sessionStorage.setItem('newProductsArray', JSON.stringify(this.productsInCart))
    }

     totalAmount() {
        var totalAmount = 0;
        for (let pr of this.productsInCart) {
        totalAmount = totalAmount + pr.price;
        }
        console.log(totalAmount);
        this.totalPriceOrder = totalAmount;
    };

    displayProducts(){
        // if 
    }

}