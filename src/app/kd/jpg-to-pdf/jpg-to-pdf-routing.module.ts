import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JpgToPdfComponent } from './jpg-to-pdf/jpg-to-pdf.component';

const routes: Routes = [
  {
    path: '', component: JpgToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JpgToPdfRoutingModule { }
