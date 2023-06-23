import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitPdfComponent } from './split-pdf/split-pdf.component';

const routes: Routes = [
  {
    path: '', component: SplitPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplitPdfRoutingModule { }
