import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoingService {

  constructor(private http:HttpClient) { }

  private receiveMessage= new Subject<string>;
  private sendMessages=new Subject<string>;

  message=this.receiveMessage.asObservable();
  private receivedMessage=""

  receive=()=>{
 
  }

 
  login=(loginData)=>{
    this.http.post('https://jsonplaceholder.typicode.com/posts',loginData).subscribe(posts=>{
    console.log(posts);
    })
  }
}
