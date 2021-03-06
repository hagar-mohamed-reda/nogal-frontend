import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlSearch'
})
export class ControlSearchPipe implements PipeTransform {

  transform(arr: any, control: any): any {
    if ( control == '' || control == null || control == undefined || control == 'Search By Permission' || control == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.control.toString().includes(control.toString())
      })
    }
  }

}
