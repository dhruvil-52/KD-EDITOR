import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPageNumberRoutingModule } from './add-page-number-routing.module';
import { AddPageNumberComponent } from './add-page-number/add-page-number.component';


@NgModule({
  declarations: [
    AddPageNumberComponent
  ],
  imports: [
    CommonModule,
    AddPageNumberRoutingModule
  ]
})
export class AddPageNumberModule { }
