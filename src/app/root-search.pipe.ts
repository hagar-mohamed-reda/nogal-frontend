import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rootSearch'
})
export class RootSearchPipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Search By Root' || root == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.root.toString().includes(root.toString())
      })
    }
  }

}
