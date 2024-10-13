import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelAndResortsService } from 'src/app/services/hotels-and-resorts/hotel-and-resorts.service';
import { LoingService } from 'src/app/services/login/loing.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.scss'],
})
export class ResortsComponent implements OnInit {
  /**
   *
   */

  restauranForm: FormGroup;
  formData;
  
  @Input() messageInput = 'test ';

  constructor(
    private hotelServices: HotelAndResortsService,
    private fb: FormBuilder
  ) {
    this.restauranForm = this.fb.group({
      restaurantname: ['', Validators.required],
    });
    this.restauranForm.valueChanges.subscribe((formData) => {
      this.formData = formData;
      console.log(formData);
    });
  }

  ngOnInit(): void {}


  ngOnChanges() {
    console.log('ng on changes insise resort component', this.messageInput);
  }
  sendMessage = () => {
    this.hotelServices.sendMessage.next(this.formData.restaurantname) ;
    this.messageInput = 'hello Sanjaya';
  };
}
