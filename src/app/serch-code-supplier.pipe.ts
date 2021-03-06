import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchCodeSupplier'
})
export class SerchCodeSupplierPipe implements PipeTransform {

  transform(arr: any, code: any): any {
    if ( code == '' || code == null || code == undefined || code == 'Search By Code' || code == 'All' || code == 'أبحث بالشخص') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.id.toString() == code.toString()
      })
    }
  }

}
