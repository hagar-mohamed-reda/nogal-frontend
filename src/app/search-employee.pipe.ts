import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(arr: any, name: any): any {
    if ( name == '' || name == null || name == undefined || name == 'أبحث بالشخص' || name == 'الكل') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.nameemployee.toLowerCase().includes(name.toLowerCase())
      })
    }
  }

}
