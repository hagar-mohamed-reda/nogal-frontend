import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySearch'
})
export class CategorySearchPipe implements PipeTransform {

  transform(arr: any, control: any): any {
    if ( control == '' || control == null || control == undefined || control == 'Search By Permission' || control == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.category.toString() == control.toString()
      })
    }
  }

}
