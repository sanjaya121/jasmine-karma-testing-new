import { Component, Input, OnInit, SimpleChange } from '@angular/core';
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

  products: any;
  ngTemplate:boolean=true;

  @Input() inputChild = '';

  ngOnInit(): void {
    console.log('app-product-details ng On init');
  }

  ngOnChanges(change: SimpleChange) {
    console.log('ng on changes called');
    console.log('change :>> ', change);
  }

  ngDoCheck() {
    console.log('ng do change is called :>> ');
  }
  SaveMe = () => {
    console.log('SAVE ME SANJAYA');
  };
}
