import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergePdfComponent } from './merge-pdf/merge-pdf.component';

const routes: Routes = [
  {
    path: '', component: MergePdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergePdfRoutingModule { }
