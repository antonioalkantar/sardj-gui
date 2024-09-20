import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle.component';
import { VisorOficioComponent } from './components/visor-oficio/visor-oficio.component';

const routes: Routes = [
  { path: '', component: DetalleComponent },
  { path: 'visor-oficio', component: VisorOficioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRoutingModule {}
