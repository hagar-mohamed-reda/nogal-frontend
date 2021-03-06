import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCom'
})
export class DateComPipe implements PipeTransform {

  transform(arr: any, code: any, code2: any): any {
    if ( code == '' || code == null || code == undefined || code == 'undefined' || code == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return new Date(arr.dateorder).toJSON().slice(0,10) >= code && new Date(arr.datereceipt).toJSON().slice(0,10) <= code2
      })
    }
  }

}
