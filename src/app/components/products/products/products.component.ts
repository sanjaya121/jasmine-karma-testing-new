import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { map, of, pipe, switchMap } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {




  @ViewChild('productDetails') pd: ProductDetailsComponent;
  products: any;
  testForm:FormGroup
  inputMessage:string ="Message from Products page";

  constructor(private productsService: ProductsService,private fb:FormBuilder) 
  {
    this.testForm=this.fb.group({
      input:['']
    })

    this.testForm.valueChanges.subscribe(val=>{
     this.inputMessage=val.input;
    })

  }
  ngOnInit(): void {
    // console.log('lazzy loading');
    // console.log('object111 :>> ', 1 + '2' + '2');
    // console.log('object112 :>> ', 1 + +'2' + '2');
    // console.log('object113 :>> ', 1 + -'1' + '2');
    // console.log('object114 :>> ', +'1' + '1' + '2');
    // console.log('type of ', typeof '2' + '2');
    // this.observables();
    // this.getProducts();
    // this.promiseExample();
    // this.objectDestructuring();
  }

  ngAfterViewInit() {
    // console.log('After View Init');
    // console.log('this.pd :>> ', this.pd.SaveMe());
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked :>> ', this.pd.SaveMe());
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
      console.log('Products :>> ', this.products, typeof products.products);
    });
  };

  /// promise example
  promiseExample = () => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Promise resolved Successfully';
        resolve(data);
      }, 2000);
    });

    mypromise
      .then((result) => {
        console.log('Promis fulfilled', result);
      })
      .catch((error) => {
        console.log('error :>> ', error);
      });
  };

  /// Object Destructuring

  objectDestructuring = () => {
    const person = {
      firstName: 'Sanjaya',
      lastName: 'Chaudhary',
      phone: '612-258-3207',
      email: 'sanjaya121@gmail.com',
    };

    let { firstName, lastName } = person;
    console.log('Destructuring', firstName, lastName);
    console.log('spread:>> ', { ...person, age: '40' });
  };

  changeInput(){
    this.inputMessage="Hello Sanjaya";
  }
}
