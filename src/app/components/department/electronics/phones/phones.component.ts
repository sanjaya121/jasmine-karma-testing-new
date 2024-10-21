import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss'],
})
export class PhonesComponent implements OnInit {

  @Input() name;

  ngOnInit(): void {
    console.log('ng on init called from phones ');
  }
  ngOnChanges(change:SimpleChange){
    console.log("change",change);
  }
}
