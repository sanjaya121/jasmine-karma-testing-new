import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, map } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userId: string = '';

  ngOnInit(): void {
    console.log('ng on init in login component.');
    of(1, 2, 3).pipe(map((x: any) => console.log('pipe example,', x.x)));
    this.trythyAndFalsy(5);
    this.promiseExample();
  }

  ngOnChanges = () => {
    console.log('ng on Changes in login component');
  };
  // Respond after Angular projects external content into the component's view, or into the view that a directive is in.
  // See details and example in
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit = () => {
    console.log('ngAfterViewInit');
  };

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
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
  get userid() {
    return this.loginFrom.get('userid');
  }

  get password() {
    return this.loginFrom.get('password');
  }
  loginFrom: FormGroup;

  submitForm = () => {
    // alert("submit")
    console.log('userid and password ', this.userid, this.password);
  };

  trythyAndFalsy = (x: any) => {
    if (x) {
      console.log('truthy and falsy');
    }
  };
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

     
}
