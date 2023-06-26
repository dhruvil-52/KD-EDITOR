import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfToPngComponent } from './pdf-to-png/pdf-to-png.component';

const routes: Routes = [
  {
    path: '', component: PdfToPngComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfToPngRoutingModule { }
