import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivadoComponent } from './privado.component';

const routes: Routes = [
  {
    path: '',
    component: PrivadoComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then((m) => m.InicioModule) },
      {
        path: 'consultar-registros',
        loadChildren: () =>
          import('./pages/consulta-registro/consulta-registro.module').then((m) => m.ConsultaRegistroModule),
      },
      {
        path: 'registro',
        loadChildren: () => import('./pages/registro/registro.module').then((m) => m.RegistroModule),
      },
      { path: 'detalle', loadChildren: () => import('./pages/detalle/detalle.module').then((m) => m.DetalleModule) },
      { path: 'edicion', loadChildren: () => import('./pages/edicion/edicion.module').then((m) => m.EdicionModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivadoRoutingModule {}
