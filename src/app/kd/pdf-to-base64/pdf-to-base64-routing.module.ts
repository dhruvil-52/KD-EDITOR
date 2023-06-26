import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfToBase64Component } from './pdf-to-base64/pdf-to-base64.component';

const routes: Routes = [
  {
    path: '', component: PdfToBase64Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfToBase64RoutingModule { }
