import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelToPdfComponent } from './excel-to-pdf/excel-to-pdf.component';

const routes: Routes = [
  {
    path: '', component: ExcelToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelToPdfRoutingModule { }
