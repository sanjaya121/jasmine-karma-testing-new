import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GridLayoutDirective } from 'src/app/custom-directives/grid-layout.directive';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    GridLayoutDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
