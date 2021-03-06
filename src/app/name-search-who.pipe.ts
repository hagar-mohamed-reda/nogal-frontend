import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSearchWho'
})
export class NameSearchWhoPipe implements PipeTransform {

  transform(arr: any, code: any): any {
    if ( code == '' || code == null || code == undefined || code == 'أبحث بالكود' || code == 'الكل' || code == 'أبحث بالشخص' || code == 'Search By User' || code == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.who.toString() == code.toString()
      })
    }
  }
}
