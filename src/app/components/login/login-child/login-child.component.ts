import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import  {SamplePipe} from '../../../custom-pipes/sample.pipe'
@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit {
  @Input() userId: string = 'TEST TEST ';
  test: string = 'SANJAYA';

  @Output() testMessage= new EventEmitter<string>();
  
  ngOnInit(): void {
    console.log('inside child component', this.userId);
    
  }

  ngOnChanges = () => {
    console.log(this.userId);
  };

  sayHello=()=>{
    alert("hello")

    this.testMessage.emit("Hello Sanjaya")
  }
}
