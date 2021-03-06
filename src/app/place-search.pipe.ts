import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeSearch'
})
export class PlaceSearchPipe implements PipeTransform {

  transform(arr: any, root: any): any {
    if ( root == '' || root == null || root == undefined || root == 'Search By Branch' || root == 'All') {
      return arr;
    } else{
      return arr.filter((arr: any) =>{
        return arr.place.toString().includes(root.toString())
      })
    }
  }

}
