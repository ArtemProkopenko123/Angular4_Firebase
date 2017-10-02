import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPipe'
})
export class FormResultsPipe implements PipeTransform {
  transform(value: any): void {
    if(typeof value == 'boolean') {
      if(value){
        value = 'Yes'
      } else {
        value = 'No'
      }
    }
    return value;
  }
}

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  transform(value: any): void {
    alert("Сделай сортировку")
    return value;
  }
}