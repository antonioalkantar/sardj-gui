import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { PrivadoComponent } from './privado.component';
import { HeaderPrivadoComponent } from './components/header-privado/header-privado.component';
import { MenuHamburguesaComponent } from './components/menu-hamburguesa/menu-hamburguesa.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PrivadoComponent, HeaderPrivadoComponent, MenuHamburguesaComponent],
  imports: [CommonModule, PrivadoRoutingModule, MenuModule, ButtonModule],
})
export class PrivadoModule {}
