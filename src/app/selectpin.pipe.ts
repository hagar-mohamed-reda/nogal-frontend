import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectpin'
})
export class SelectpinPipe implements PipeTransform {

  transform(arr: any, code: any): any {
    if ( code == '' || code == null || code == undefined || code == 'PI NO' || code == 'All' || code == 'undefined') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.pino.toString() == code.toString()
      })
    }
  }

}
