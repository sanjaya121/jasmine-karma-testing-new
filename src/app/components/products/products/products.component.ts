import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { map, of, pipe, switchMap } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import {Products} from '../../../models/products'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  @ViewChild('productDetails') pd: ProductDetailsComponent;
  products:any;
  ngOnInit(): void {
    // console.log('lazzy loading');
    // console.log('object111 :>> ', 1 + '2' + '2');
    // console.log('object112 :>> ', 1 + +'2' + '2');
    // console.log('object113 :>> ', 1 + -'1' + '2');
    // console.log('object114 :>> ', +'1' + '1' + '2');
    // console.log('type of ', typeof '2' + '2');
    this.observables();
    this.getProducts();
  }
  ß;
  ngAfterViewInit() {
    console.log('After View Init');
    console.log('this.pd :>> ', this.pd.SaveMe());
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked :>> ', this.pd.SaveMe());
  }

  observables = () => {
    let obs$ = of(1, 2, 3, 4, 6);
    // obs$.pipe(map((x)=>x*2)).subscribe((v)=>console.log('obeserbavles :>> ', v));

    const switchedMap = of(1, 2, 3).pipe(
      switchMap((x) => of(x, x ** 2, x ** 3))
    );
    // switchedMap.subscribe(x=>console.log(x,"Switched MAp"))
  };

  getProducts = () => {
    this.productsService.getProducts().subscribe((products: any) => {
      this.products = products.products;
      console.log('Products :>> ', this.products,typeof products.products);
    });
  };
}
