import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PngToPdfComponent } from './png-to-pdf/png-to-pdf.component';

const routes: Routes = [
  {
    path: '', component: PngToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PngToPdfRoutingModule { }
