import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'to0'
})
export class To0Pipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Search By Root' || root == 'All' || root == 'undefined') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.to0.toString().includes(root.toString())
      })
    }
  }

}
