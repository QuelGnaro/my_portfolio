import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarattiLorenzoComponent } from './pages/home/baratti-lorenzo.component';

const routes: Routes = [
  { path: 'home', component: BarattiLorenzoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarattiLorenzoRoutingModule { }
