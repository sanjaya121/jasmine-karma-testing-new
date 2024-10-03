import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit {
  @Input() userId: string = 'TEST TEST ';
  test: string = 'SANJAYA';


  
  ngOnInit(): void {
    console.log('inside child component', this.userId);
  }

  ngOnChanges = () => {
    console.log(this.userId);
  };
}
