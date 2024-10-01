import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  ngOnInit(): void {
    
  }


  constructor(private fb:FormBuilder) 
  {
    this.loginFrom=this.fb.group({
    userid:['',Validators.required],
    password: ['',[Validators.required],Validators.max(9)]
    })
  }

  loginFrom : FormGroup;
 



}
