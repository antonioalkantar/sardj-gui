import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionComponent } from './edicion.component';

const routes: Routes = [{ path: '', component: EdicionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicionRoutingModule {}
