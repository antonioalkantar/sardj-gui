import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdicionRoutingModule } from './edicion-routing.module';
import { EdicionComponent } from './edicion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleBarModule, EstatusTagModule, UploadControlModule, FileCountModule } from '@app/shared';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [EdicionComponent],
  imports: [
    CommonModule,
    EdicionRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    TitleBarModule,
    EstatusTagModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    TableModule,
    UploadControlModule,
    FileCountModule,
  ],
})
export class EdicionModule {}
