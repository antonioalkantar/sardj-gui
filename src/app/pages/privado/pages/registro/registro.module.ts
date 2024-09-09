import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { CardModule } from 'primeng/card';
import { FileCountModule, TitleBarModule, UploadControlModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [RegistroComponent],
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
    FileCountModule,
  ],
})
export class RegistroModule {}
