import { Component, signal, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { HotelAndResortsService } from 'src/app/services/hotels-and-resorts/hotel-and-resorts.service';
import { LoingService } from 'src/app/services/login/loing.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  /**
   *
   */
  constructor(private hotelService: HotelAndResortsService) {}

  receivedMessages = '';
  messageFromSiblings = '';
  listOfRestaurants: any;
  ifCondition: boolean = true;

  ngOnInit() {
    this.receiveMessage();
    this.getRestaurants();
    console.log('is zint :>> ', this.isInteger(4.2));
    this.reverseStringByWord(this.string1);
  }

  ngOnChanges() {
    console.log('ng on changes inside restaurants component');
    this.receiveMessage();
  }

  //this will receive message from resorts component //
  receiveMessage = () => {
    this.hotelService.sendMessage.subscribe((message) => {
      console.log('message from siblings', message);
      this.messageFromSiblings = message;
    });
  };

  getRestaurants = () => {
    this.hotelService.getRestaurants().subscribe((res) => {
      this.listOfRestaurants = res;
    });
    let count = signal(0);
    console.log('signal', count.set(count() + 1));
  };

  isInteger = (value) => {
    return value % 1 === 0;
  };

  // Write a program to reverse a string by words. Also show the reverse of each words in place
  string1 = ' Javascript is awesome';
  reverseStringByWord = (string) => {
    console.log('reverse by word', string.split('').reverse().join(''));
    console.log(
      'split and insert _ by word',
      string.split(' ').reverse().join('_')
    );

   const  arr1=['1a','b','c'];

   console.log('one digit number :>> ', arr1.filter(value=>{
    return /[0-9]/.test(value);
   }));
  };
}
