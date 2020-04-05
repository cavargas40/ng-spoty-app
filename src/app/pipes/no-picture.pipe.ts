import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noPicture',
})
export class NoPicturePipe implements PipeTransform {
  transform(value: any[]): string {
    const noimage = 'assets/img/noimage.png';
    if (!value) {
      return noimage;
    }
    return value.length > 0 ? value[1].url : noimage;
  }
}
