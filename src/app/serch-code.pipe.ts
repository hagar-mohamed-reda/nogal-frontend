import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchCode'
})
export class SerchCodePipe implements PipeTransform {

  transform(arr: any, code: any): any {
    if ( code == '' || code == null || code == undefined || code == 'undefined' || code == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.code.toLowerCase() == code.toLowerCase()
      })
    }
  }

}
