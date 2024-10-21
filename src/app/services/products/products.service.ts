import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts=():Observable<any>=>{
    let api ="https://dummyjson.com/products";
    return this.http.get(api) ;
  }

  
}
