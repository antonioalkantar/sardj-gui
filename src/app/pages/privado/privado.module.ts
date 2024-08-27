import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { PrivadoComponent } from './privado.component';
import { HeaderPrivadoComponent } from './components/header-privado/header-privado.component';


@NgModule({
  declarations: [
    PrivadoComponent,
    HeaderPrivadoComponent
  ],
  imports: [
    CommonModule,
    PrivadoRoutingModule
  ]
})
export class PrivadoModule { }
