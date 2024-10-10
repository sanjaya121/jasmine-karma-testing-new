import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoingService {

  constructor(private http:HttpClient) { }


  login=(loginData)=>{
    this.http.post('https://jsonplaceholder.typicode.com/posts',loginData).subscribe(posts=>{
    console.log(posts);
    })
  }
}
