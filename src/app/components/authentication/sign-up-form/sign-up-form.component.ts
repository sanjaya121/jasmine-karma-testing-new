import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home-services/home.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  ngOnInit(): void {
    this.promise();
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

  promise = () =>{
  return new Promise((resolve, reject) => {
      console.log(
        'adfadsfasdfasfasdfasdfasdfas',
        resolve('xxxxxxxxxxxxxxxxxxx')
      );
    });
}
}
