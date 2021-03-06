import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemSearchReq'
})
export class ItemSearchReqPipe implements PipeTransform {

  transform(arr: any, code: any): any {
    if ( code == '' || code == null || code == undefined || code == 'undefined' || code == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.item.toString() == code.toString()
      })
    }
  }

}
