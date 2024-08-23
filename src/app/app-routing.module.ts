import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'publico',
  },
  { path: 'publico', loadChildren: () => import('./pages/publico/publico.module').then((m) => m.PublicoModule) },
  { path: 'privado', loadChildren: () => import('./pages/privado/privado.module').then((m) => m.PrivadoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
