import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';

const routes: Routes = [
  {
    path: '', component: HtmlToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlToPdfRoutingModule { }
