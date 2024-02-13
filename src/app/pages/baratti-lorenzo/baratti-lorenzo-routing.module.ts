import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarattiLorenzoComponent } from './baratti-lorenzo.component';

const routes: Routes = [
  { path: '', component: BarattiLorenzoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarattiLorenzoRoutingModule { }
