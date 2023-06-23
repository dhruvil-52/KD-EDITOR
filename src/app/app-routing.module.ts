import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './container/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'kd', loadChildren: () => import('./kd/kd.module')
      .then(m => m.KdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
