import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationBill'
})
export class QuotationBillPipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Search By QUotation No' || root == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.bill_id.toString() == root.toString()
      })
    }
  }

}
