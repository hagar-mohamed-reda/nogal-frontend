import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(arr: any, name: any): any {
    if ( name == '' || name == null || name == undefined || name == 'أبحث بالشخص' || name == 'الكل') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.name.toLowerCase().includes(name.toLowerCase())
      })
    }
  }

}
