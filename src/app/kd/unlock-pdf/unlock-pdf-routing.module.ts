import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnlockPdfComponent } from './unlock-pdf/unlock-pdf.component';

const routes: Routes = [
  {
    path: '', component: UnlockPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnlockPdfRoutingModule { }
