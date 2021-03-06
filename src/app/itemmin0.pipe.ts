import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemmin0'
})
export class Itemmin0Pipe implements PipeTransform {

  transform(arr: any): any {
      return arr.filter((arr: any) =>{
        return arr.qty > 0
      })
  }

}
