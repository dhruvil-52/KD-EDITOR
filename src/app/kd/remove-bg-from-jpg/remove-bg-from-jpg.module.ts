import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveBgFromJpgRoutingModule } from './remove-bg-from-jpg-routing.module';
import { RemoveBgFromJpgComponent } from './remove-bg-from-jpg/remove-bg-from-jpg.component';


@NgModule({
  declarations: [
    RemoveBgFromJpgComponent
  ],
  imports: [
    CommonModule,
    RemoveBgFromJpgRoutingModule
  ]
})
export class RemoveBgFromJpgModule { }
