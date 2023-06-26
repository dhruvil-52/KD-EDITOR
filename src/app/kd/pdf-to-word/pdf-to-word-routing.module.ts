import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfToWordComponent } from './pdf-to-word/pdf-to-word.component';

const routes: Routes = [
  {
    path: '', component: PdfToWordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfToWordRoutingModule { }
