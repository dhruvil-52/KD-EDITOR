import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveBgFromPngComponent } from './remove-bg-from-png/remove-bg-from-png.component';

const routes: Routes = [
  {
    path: '', component: RemoveBgFromPngComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveBgFromPngRoutingModule { }
