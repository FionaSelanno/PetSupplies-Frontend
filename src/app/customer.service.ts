import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomerService {
  private subject = new Subject<any>();
  productArray = [];
  totalPrice = 0;

  addedProducts(product) {
    this.productArray.push(product);
    console.log(this.productArray);
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