import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionComponent } from './inicio-sesion.component';
import { CardLoginFormComponent } from './components/card-login-form/card-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
  declarations: [InicioSesionComponent, CardLoginFormComponent],
  imports: [CommonModule, InicioSesionRoutingModule, ReactiveFormsModule, RecaptchaModule, RecaptchaFormsModule],
})
export class InicioSesionModule {}
