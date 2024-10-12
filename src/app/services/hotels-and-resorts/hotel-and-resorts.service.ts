import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelAndResortsService {
  constructor(private http: HttpClient) {}

  receiveMessage = new Subject<string>();
  sendMessage = new Subject<string>();

  messages: string = '';

  //this will receive from resorts components
  receiveMessages = () => {
    this.receiveMessage.subscribe((message) => {
      this.messages = message;
    });
  };

  //this will send messages to different components
  sendMessages = () => {
    this.sendMessage.next(this.messages);
  };

  getRestaurants=()=>{
    return this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos');
  }
}
