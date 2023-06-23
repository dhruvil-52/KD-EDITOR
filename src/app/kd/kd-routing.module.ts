import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'merge-pdf', loadChildren: () => import('./merge-pdf/merge-pdf.module').then(m => m.MergePdfModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KdRoutingModule { }
