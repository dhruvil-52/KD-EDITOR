import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfToJpgComponent } from './pdf-to-jpg/pdf-to-jpg.component';

const routes: Routes = [
  {
    path: '', component: PdfToJpgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfToJpgRoutingModule { }
