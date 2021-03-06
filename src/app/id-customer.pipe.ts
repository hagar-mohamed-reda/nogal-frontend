import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCustomer'
})
export class IdCustomerPipe implements PipeTransform {

  transform(arr: any, code: any): any {
    if ( code == '' || code == null || code == undefined || code == 'Search By Code' || code == 'All' || code == 'أبحث بالشخص' ||code == 'Search By Customer') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.id_customer.toString() == code.toString()
      })
    }
  }

}
