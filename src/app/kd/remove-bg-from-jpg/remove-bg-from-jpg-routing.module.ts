import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveBgFromJpgComponent } from './remove-bg-from-jpg/remove-bg-from-jpg.component';

const routes: Routes = [
  {
    path: '', component: RemoveBgFromJpgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveBgFromJpgRoutingModule { }
