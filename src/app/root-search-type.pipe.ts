import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rootSearchType'
})
export class RootSearchTypePipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Searching By Branch Type' || root == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.typeofroot.toString().includes(root.toString())
      })
    }
  }

}
