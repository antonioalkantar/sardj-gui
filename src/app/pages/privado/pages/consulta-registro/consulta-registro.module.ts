import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRegistroRoutingModule } from './consulta-registro-routing.module';
import { ConsultaRegistroComponent } from './consulta-registro.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { EstatusTagModule, ProgressBarTableModule, TitleBarModule } from '@app/shared';

@NgModule({
  declarations: [ConsultaRegistroComponent],
  imports: [
    CommonModule,
    ConsultaRegistroRoutingModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    PanelModule,
    ButtonModule,
    TableModule,
    EstatusTagModule,
    PaginatorModule,
    ProgressBarTableModule,
    TitleBarModule,
  ],
})
export class ConsultaRegistroModule {}
