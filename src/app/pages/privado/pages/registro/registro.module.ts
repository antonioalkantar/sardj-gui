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
  ],
})
export class RegistroModule {}
