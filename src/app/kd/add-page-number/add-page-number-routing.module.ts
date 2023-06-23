import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageNumberModule } from './add-page-number.module';
import { AddPageNumberComponent } from './add-page-number/add-page-number.component';

const routes: Routes = [
  {
    path: '', component: AddPageNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPageNumberRoutingModule { }
