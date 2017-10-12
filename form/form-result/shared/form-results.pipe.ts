import { Form } from './../../form-constructor/shared/form';
import { FirebaseListObservable } from 'angularfire2/database';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/Rx';
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
  name: 'formsResultPipe'
})
export class FormsResultPipe implements PipeTransform {
  
  transform(value: any, criteria: string ): FirebaseListObservable<Form[]> {
    if(criteria == "date") {
      
   /* ///////////   BAAAAADDD //////////
      var list = document.getElementById('formDetailWrap').children;
      
      let sortArr = [];
      for(let t = 0; t < list.length;t++){
        sortArr.push(list[t])
      }
      sortArr.sort((a,b) => {
        if (a.attributes['data-id'].value < b.attributes['data-id'].value) return 1;
        if (a.attributes['data-id'].value > b.attributes['data-id'].value) return -1;
        return 0; 
      })
      for(let t = 0; t < list.length;t++){
        list[t].outerHTML = sortArr[t].outerHTML
  
      }

    /* ///////////   BAAAAADDD 2 //////////
     value.subscribe(res=> {
       let test = [];
       let count:number = 0; 
       for(let t of res) {
          test.push(t)
       }
       test.sort((b,a) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      for(let t of res) {
        value.set(t, test[count]);
        //sconsole.log(t)
        count++;
      }
     })
    */
      return value
    }
    if(!criteria){
      return value
    };
    
  }

}