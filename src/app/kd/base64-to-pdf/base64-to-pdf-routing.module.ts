import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64ToPdfComponent } from './base64-to-pdf/base64-to-pdf.component';

const routes: Routes = [
  {
    path: '', component: Base64ToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Base64ToPdfRoutingModule { }
