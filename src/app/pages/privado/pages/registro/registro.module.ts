import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { CardModule } from 'primeng/card';
import { TitleBarModule, UploadControlModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileCountPipe } from './pipes/file-count.pipe';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [RegistroComponent, FileCountPipe],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ReactiveFormsModule,
    TitleBarModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    UploadControlModule,
    ButtonModule,
    TableModule,
  ],
})
export class RegistroModule {}
