import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
})
export class ElectronicsComponent implements OnInit {

  electronicsForm:FormGroup;
  name="Test Test";
  constructor(private fb:FormBuilder) {
    console.log('constructor is called');
    this.electronicsForm=this.fb.group({
      name:[""]
    })

    this.electronicsForm.valueChanges.subscribe(val=>{
      this.name=val;
    })
  }

 
  ngOnInit(): void {
  
  }
}
