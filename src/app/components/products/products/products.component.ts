import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild('productDetails') pd :ProductDetailsComponent;


  ngOnInit(): void {
    console.log("lazzy loading");

  }

  ngAfterViewInit(){
    console.log("After View Init");
    console.log('this.pd :>> ', this.pd.SaveMe());
  }


  ngAfterViewChecked(){
    console.log('ngAfterViewChecked :>> ',this.pd.SaveMe());

  }
}
