import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfToHtmlComponent } from './pdf-to-html/pdf-to-html.component';

const routes: Routes = [
  {
    path: '', component: PdfToHtmlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfToHtmlRoutingModule { }
