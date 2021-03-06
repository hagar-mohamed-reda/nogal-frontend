import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPinoSup',
  pure: false
})
export class SearchPinoSupPipe implements PipeTransform {

  transform(arr: any, root: any): any {
    // if ( root == '' || root == null || root == undefined || root == 'Search By Supplier' || root == 'All') {
    //   return arr;
    // } else{
    //   let x = arr[parseInt(root) - 1];
    //   let y = [];
    //   y.push(x)
    //     return y;
    // }
  }

}
