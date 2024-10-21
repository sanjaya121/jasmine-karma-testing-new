import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[table-grid]'
})
export class GridLayoutDirective {

  constructor(element:ElementRef) {
    
    element.nativeElement.style.backgroundColor="red";
}
}
