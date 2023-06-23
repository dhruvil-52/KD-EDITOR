import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompressPdfComponent } from './compress-pdf/compress-pdf.component';

const routes: Routes = [
  {
    path: '', component: CompressPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompressPdfRoutingModule { }
