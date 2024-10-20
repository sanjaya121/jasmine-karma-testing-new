import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  /**
   *
   */
  constructor(private productsService: ProductsService) {}

  products : any;
  ngOnInit(): void {
    console.log('app-product-details');
    // this.getProducts();
  }

  SaveMe = () => {};


 
}
