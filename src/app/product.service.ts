import {Injectable} from '@angular/core';
import { Http} from '@angular/http';

@Injectable() //this decorator is required if you inject a service into a service. In this case the http service to sent requests

export class ProductService{
    constructor(private http: Http){} //this injects the service
    getProducts(){
        return this.http.get('http://localhost:8080/webshop/api/product');
    }

}