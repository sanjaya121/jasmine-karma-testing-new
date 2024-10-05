import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class SamplePipe implements PipeTransform {

  transform(value: any) {

    return value *100
  }

}
