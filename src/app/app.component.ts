import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jasmine-karma-testing';

ngOnInit(): void {
  console.log("App Component")

}
ngOnchanges=()=>{

}


}
