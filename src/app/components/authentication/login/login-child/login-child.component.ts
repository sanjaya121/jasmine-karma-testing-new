import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { SamplePipe } from '../../../../custom-pipes/sample.pipe'

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit {

  @Input() sanjaya: string = 'TEST TEST ';
  @Output() testMessage = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('inside child component', this.sanjaya);

  }

  ngOnChangess = (changes: SimpleChange) => {

    if (changes['sanjaya']) {
      console.log("child component ng on changes");
    }
  };

  sayHello = () => {
    alert("hello")

    this.testMessage.emit("Hello Sanjaya")
  }
}
