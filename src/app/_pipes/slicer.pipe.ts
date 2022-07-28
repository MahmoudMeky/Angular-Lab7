import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicer'
})
export class SlicerPipe implements PipeTransform {

  transform(value: string, numberOfCh: number): unknown {
    return value.slice(0, numberOfCh);
  }

}
