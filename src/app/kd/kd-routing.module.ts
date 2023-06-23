import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'merge-pdf', loadChildren: () => import('./merge-pdf/merge-pdf.module').then(m => m.MergePdfModule)
  },
  {
    path: 'split-pdf', loadChildren: () => import('./split-pdf/split-pdf.module').then(m => m.SplitPdfModule)
  },
  {
    path: 'compress-pdf', loadChildren: () => import('./compress-pdf/compress-pdf.module').then(m => m.CompressPdfModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KdRoutingModule { }
