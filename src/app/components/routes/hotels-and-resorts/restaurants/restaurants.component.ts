import { Component, Input, OnInit } from '@angular/core';
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
  messageFromSiblings="";
  listOfRestaurants:any;
  @Input() messageInput="test "
  ngOnInit() {
    this.receiveMessage();
    this.getRestaurants();
  }

  ngOnChanges(){
    console.log("ng on changes inside restaurants component");
    this.receiveMessage();

  }

  //this will receive message from resorts component //
  receiveMessage = () => {
    this.hotelService.sendMessage.subscribe(message =>{
      console.log("message from siblings",message);
      this.messageFromSiblings=message;
    });
  };

  getRestaurants=()=>{
    this.hotelService.getRestaurants().subscribe(res=>{
      this.listOfRestaurants=res;
    })
  }
}
