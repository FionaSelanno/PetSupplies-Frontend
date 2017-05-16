import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
// import { CoolsessionStorage} from 'angular2-cool-storage';

@Injectable()
export class CustomerService{
 
  // localStorage: LocalStorage;
  private subject = new Subject<any>();
  productArray = [];
  totalPrice = 0;

  // constructor(localStorage: LocalStorage){
    // this.localStorage = localStorage;
  //   console.log('test'+ localStorage);
  //   console.log(this.localStorage);
  // }

  test(){
    console.log("test");
      if(sessionStorage.getItem( 'products') === null || sessionStorage.getItem('products') === undefined){
            console.log('No markers found...creating...');
      sessionStorage.setItem('products', JSON.stringify(this.productArray));
    } else { 
      var stringResult = sessionStorage.getItem('products');
      this.productArray = JSON.parse(stringResult);
      this.totalPrice = this.productArray.length;
}
    // console.log(this.sessionStorage.getItem('markers'));
  }

  addedProducts(product) {
    this.productArray.push(product);
    console.log(this.productArray);
     sessionStorage.setItem('products', JSON.stringify(this.productArray));
    // console.log('fetched'+ JSON.parse(sessionStorage.getItem('markers')));
    console.log(sessionStorage.getItem('products'));
    this.totalAmount();
    this.subject.next({totaal: this.productArray.length }); //updates the Observable
  };

  totalAmount() {
    var totalAmount = 0;
    for (let pr of this.productArray) {
      totalAmount = totalAmount + pr.price;
    }
    console.log(totalAmount);
    this.totalPrice = totalAmount;
  };

  getMessage(): Observable<any> {
    //wactchers zullen geupdate worden als de observable is veranderd
    return this.subject.asObservable();
  };
}