import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfToExcelComponent } from './pdf-to-excel/pdf-to-excel.component';

const routes: Routes = [
  {
    path: '', component: PdfToExcelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfToExcelRoutingModule { }
