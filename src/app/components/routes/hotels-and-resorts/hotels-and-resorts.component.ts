import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels-and-resorts',
  templateUrl: './hotels-and-resorts.component.html',
  styleUrls: ['./hotels-and-resorts.component.scss']
})
export class HotelsAndResortsComponent {

  ngAfterViewInit(){


    console.log("view ninit in parent")
  }

}
