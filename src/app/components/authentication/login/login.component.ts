import { Component, OnInit, ViewChild, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, map } from 'rxjs';
import { LoginChildComponent } from './login-child/login-child.component';
import { LoingService } from 'src/app/services/login/loing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  message:string = ""
  @ViewChild(LoginChildComponent) childComponent:LoginChildComponent;

  ngOnInit(): void {
    console.log('ng on init in login component.');
    of(1, 2, 3).pipe(map((x: any) => console.log('pipe example,', x.x)));
    this.trythyAndFalsy(this.greetme);
    this.promiseExample();
    console.log("Child component",this.childComponent);
   
  }

  ngOnChanges = () => {
    console.log('ng on Changes in login component');
  };
  // Respond after Angular projects external content into the component's view, or into the view that a directive is in.
  // See details and example in
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }

  ngAfterViewInit = () => {
    console.log('ngAfterViewInit');
    console.log("Child component",this.childComponent);
  };

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked()');
  // }

  // ngDoCheck = () => {
  //   console.log('Ng Do Changes');
  // };

  constructor(private fb: FormBuilder,private loginService:LoingService) {
    this.loginFrom = this.fb.group({
      userid: ['', Validators.required],
      password: ['', [Validators.required]],
    });

    this.loginFrom.valueChanges.subscribe((data) => {
      this.userId = data;
      console.log('Form Data form', data.userid);
    });
  }
  get userid() {
    return this.loginFrom.get('userid');
  }

  get password() {
    return this.loginFrom.get('password');
  }
  loginFrom: FormGroup;

  submitForm = () => {
    this.loginService.login(this.userId);
  };

  trythyAndFalsy = (x: any) => {
    x();
  };

  greetme=()=>{
    console.log("Hello Sanjaya ");
  }


      promiseExample=()=>{
        return new Promise((resolve,reject)=>{
          let success =ɵbypassSanitizationTrustResourceUrl;
          setTimeout(() => {
            if(success){
              resolve("Successfully");
              console.log("successfull");
            }

          else{
            reject("unsuccessfula");
            console.log("unsuccessfull");
          }
          }, 2000);
        }).then(()=>{
          console.log("then block")
        })
      }

    sendMessage=()=>{
      // this.loginService.receive("hello from Sanjaya");
    }
}
