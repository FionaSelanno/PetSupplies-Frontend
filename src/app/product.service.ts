import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable() //this decorator is required if you inject a service into a service. In this case the http service to sent requests

export class ProductService{
    constructor(private http: Http){} //this injects the service
    getProducts(){
        return this.http.get('http://localhost:8080/webshop/api/product')
        .map( //this method takes all the (new) data and wraps this in a new observable
            (response: Response) => {
                const data = response.json(); //looks in the body property, gets the data from there and turns it into a Javascript object
                return data;
            }
        ) //observable operator 
    }

}