import { Component } from '@angular/core';
import { CustomerService} from 'app/customer.service';
import { Subscription} from 'rxjs/subscription'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent{   
    message: any;
    subscription: Subscription;
    nrOfProducts = this.cs.productArray.length;


    constructor(private cs:CustomerService ){
    //subscribed aan de observable als die veranderd wordt dit geupdate
    this.subscription = this.cs.getMessage()
    .subscribe(message => { 
        this.nrOfProducts = message.totaal
        console.log(this.message) });  
    }
}