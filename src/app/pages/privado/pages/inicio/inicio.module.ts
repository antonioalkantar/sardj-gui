import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, InicioRoutingModule, ButtonModule],
})
export class InicioModule {}
