import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWatermarkComponent } from './add-watermark/add-watermark.component';

const routes: Routes = [
  {
    path: '', component: AddWatermarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddWatermarkRoutingModule { }
