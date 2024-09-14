import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroUsuarioRoutingModule } from './registro-usuario-routing.module';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { ChipModule, TitleBarModule } from '@app/shared';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistroUsuarioComponent],
  imports: [
    CommonModule,
    RegistroUsuarioRoutingModule,
    ReactiveFormsModule,
    TitleBarModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    ChipModule,
  ],
})
export class RegistroUsuarioModule {}
