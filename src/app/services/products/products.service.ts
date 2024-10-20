import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    let api ="https://dummyjson.com/products";
    return this.http.get(api);
  }
}
