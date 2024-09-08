import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { EstatusTagModule, TitleBarModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [DetalleComponent],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    ReactiveFormsModule,
    TitleBarModule,
    EstatusTagModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    TableModule,
  ],
})
export class DetalleModule {}
