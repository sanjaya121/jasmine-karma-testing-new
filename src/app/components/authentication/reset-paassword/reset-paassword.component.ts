import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-reset-paassword',
  templateUrl: './reset-paassword.component.html',
  styleUrls: ['./reset-paassword.component.scss']
})
export class ResetPaasswordComponent implements OnInit{


  /**
   *
   */
  constructor() {
       
  }

   subject = new Subject();

ngOnInit(): void {
  console.log("reset password conponent");
    this.subject.next("test subject");

}

}
