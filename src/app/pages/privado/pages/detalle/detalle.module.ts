import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { EstatusTagModule, FileCountModule, TitleBarModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { VisorOficioComponent } from './components/visor-oficio/visor-oficio.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [DetalleComponent, VisorOficioComponent],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    ReactiveFormsModule,
    TitleBarModule,
    EstatusTagModule,
    CalendarModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    TableModule,
    FileCountModule,
    TabViewModule,
    InputTextareaModule,
    RadioButtonModule,
  ],
})
export class DetalleModule {}
