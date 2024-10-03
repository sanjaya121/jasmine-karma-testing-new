import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userId: string="";

  ngOnInit(): void {

    console.log("ng on init in login component.")
  }

  ngOnChanges = () => {
    console.log('ng on Changes in login component');
   
  };
// Respond after Angular projects external content into the component's view, or into the view that a directive is in.
// See details and example in
  ngAfterContentInit(){
console.log("ngAfterContentInit");
  }

  ngAfterViewInit=()=>{
console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked()");
  }


  ngDoCheck = () => {
    console.log('Ng Do Changes');
  };

  constructor(private fb: FormBuilder) {
    this.loginFrom = this.fb.group({
      userid: ['', Validators.required],
      password: ['', [Validators.required]],
    });

    this.loginFrom.valueChanges.subscribe((data) => {
      this.userId = data.userid;
      console.log('Form Data from parent component', data.userid);
    });
  }
get userid(){
  return this.loginFrom.get('userid');
}

get password(){
  return this.loginFrom.get('password');
}
  loginFrom: FormGroup;


  submitForm=()=>{
    // alert("submit")
    console.log('userid and password ', this.userid,this.password);
  }
}
