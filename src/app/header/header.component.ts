import { Component, OnInit } from '@angular/core';
import { CustomerService} from 'app/customer.service';
import { Subscription} from 'rxjs/subscription'
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit{   
    //message: any;
    subscription: Subscription;
    nrOfProducts = this.cs.productArray.length;
    

    constructor(private router: Router, private cs:CustomerService ){
    //subscribed aan de observable als die veranderd wordt dit geupdate
    this.subscription = this.cs.getMessage()
    .subscribe(response => { 
        this.nrOfProducts = response.products.length
        console.log(this.nrOfProducts) });  
    }

    ngOnInit() {
    this.cs.sessionAddProducts();
   };
}