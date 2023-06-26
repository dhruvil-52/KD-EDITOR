import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveBgFromPngRoutingModule } from './remove-bg-from-png-routing.module';
import { RemoveBgFromPngComponent } from './remove-bg-from-png/remove-bg-from-png.component';


@NgModule({
  declarations: [
    RemoveBgFromPngComponent
  ],
  imports: [
    CommonModule,
    RemoveBgFromPngRoutingModule
  ]
})
export class RemoveBgFromPngModule { }
