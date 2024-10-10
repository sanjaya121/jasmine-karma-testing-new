import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home-services/home.service';
import { of, pipe, mergeMap, reduce, map } from 'rxjs';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  ngOnInit(): void {
    this.rxjsOperatiors();
    this.findMissingNumber(this.arr);
  }
  createAccount: FormGroup;
  signupFormData: {};

  constructor(private fb: FormBuilder, private postServices: HomeService) {
    this.createAccount = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassord: ['', Validators.required],
    });

    this.createAccount.valueChanges.subscribe((formData) => {
      console.log('formData', formData);
      this.signupFormData = formData;
    });
  }
  get firstname() {
    return this.createAccount.get('firstname');
  }
  get lastname() {
    return this.createAccount.get('lastname');
  }

  submitForm = () => {
    this.postServices.submitData(this.signupFormData).subscribe((data) => {});
  };

  //demonstrate rxjs operators.
  rxjsOperatiors = () => {
    let obs1$ = of(1, 2, 3);
    let obs2$ = of(4, 5, 6);
    let xyz = obs1$.pipe(
      mergeMap((val1) => obs2$.pipe(map((val2) => val1 + '' + val2)))
    );
    xyz.subscribe((val) => console.log(val, 'obervable'));
  };

  ///missing number
  arr = [1,3,4,5,7,8,9,10,11,12,13,14]
  findMissingNumber = (array) => {
    let result = Math.floor((array.length + 1) * (array.length + 2) / 2);
    for (let i = 0; i < array.length; i++) result -= array[i];
    console.log('result :>> ', result);
  };
}
