import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileCount',
})
export class FileCountPipe implements PipeTransform {
  transform(length: number | null | undefined): string {
    const count = length ? length : 0;
    const label = count === 1 ? 'Archivo' : 'Archivos';
    return `${count} ${label}`;
  }
}
