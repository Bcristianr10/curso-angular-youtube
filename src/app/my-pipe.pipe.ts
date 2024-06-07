import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string | undefined) {
    return value?.toUpperCase()  || 'No value';
  }

}
