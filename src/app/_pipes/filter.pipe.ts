import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(filterArr: any[], filterText: string, filterProp: string[]) {
    let list: any = [];
    filterArr.forEach(selectedObject => {
      filterProp.forEach(selectedProp => {
        if (selectedObject[selectedProp] && selectedObject[selectedProp].toString().toLowerCase().includes(filterText.toLowerCase())) {
          if (!list.includes(selectedObject)) {
            list.push(selectedObject)
          }
        }
      })
    })
    return list
  }
}
