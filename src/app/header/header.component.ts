import { Component } from '@angular/core';
import { CustomerService} from 'app/customer.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{   
    // nrOfProducts = 0;

    constructor(private cs:CustomerService ){   
    }

    test(){
    this.nrOfProducts = this.cs.products().length;
    console.log(this.nrOfProducts);
    console.log(this.cs.products());
    }

    nrOfProducts = this.cs.productArray.length;

   
    


// how to call this method in the header component when clicked on a product on the productlist component?
// totalAddedProducts(){
//     console.log("test");
    // if (this.cs.productArray.length == 0){
    //     this.totalProducts = NaN;
    // } else {
    // this.totalProducts = this.cs.productArray.length;
    // }
// }

}