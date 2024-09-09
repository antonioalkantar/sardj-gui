import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileCountPipe } from './pipes/file-count.pipe';

@NgModule({
  declarations: [FileCountPipe],
  imports: [CommonModule],
  exports: [FileCountPipe],
})
export class FileCountModule {}
