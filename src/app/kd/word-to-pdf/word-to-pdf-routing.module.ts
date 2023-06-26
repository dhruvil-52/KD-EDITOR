import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordToPdfComponent } from './word-to-pdf/word-to-pdf.component';

const routes: Routes = [
  {
    path: '', component: WordToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordToPdfRoutingModule { }
