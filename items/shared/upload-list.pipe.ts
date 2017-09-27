
import { Upload } from './upload';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/Rx';
@Pipe({
  name: 'uploadListPipe'
})
export class UploadListPipe implements PipeTransform {
  
  transform(uploads, criteria: string): any {
    
    if(criteria == 'size'){
      return uploads.map(
        res => uploads = (res.sort((b, a): number => {
          if (a.size < b.size) return 1;
          if (a.size > b.size) return -1;
          return 0; 
        })
      ));
    }else if (criteria == 'sizeRev') {
      return uploads.map(
        res => uploads = (res.sort((a,b): number => {
          if (a.size < b.size) return 1;
          if (a.size > b.size) return -1;
          return 0; 
        })
      ));
    }else if (criteria == 'name') {
      return uploads.map(
        res => uploads = (res.sort((a,b): number => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0; 
        })
      ));
    } else if (criteria == 'nameRev') {
      return uploads.map(
        res => uploads = (res.sort((b,a): number => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0; 
        })
      ));
    } else { return uploads }
  }

}
  

