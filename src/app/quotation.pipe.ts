import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotation'
})
export class QuotationPipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Search By QUotation No' || root == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.id_bill.toString() == root.toString()
      })
    }
  }

}
