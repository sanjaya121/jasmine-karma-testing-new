import { Component } from '@angular/core';
import { HotelAndResortsService } from 'src/app/services/hotels-and-resorts/hotel-and-resorts.service';
import { LoingService } from 'src/app/services/login/loing.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.scss']
})
export class ResortsComponent {
  /**
   *
   */
  constructor(private hotelServices  : HotelAndResortsService) {
  
    
  }

  sendMessage =()=>{
    this.hotelServices.sendMessage.next("hello Sanjaya ");
  }

}
