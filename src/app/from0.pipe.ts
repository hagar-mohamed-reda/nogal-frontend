import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'from0'
})
export class From0Pipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Search By Root' || root == 'All' || root == 'undefined') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.from0.toString().includes(root.toString())
      })
    }
  }

}
