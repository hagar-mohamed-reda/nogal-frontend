import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSupplier'
})
export class SearchSupplierPipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Search By Supplier' || root == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.supplier.toString().includes(root.toString())
      })
    }
  }

}
