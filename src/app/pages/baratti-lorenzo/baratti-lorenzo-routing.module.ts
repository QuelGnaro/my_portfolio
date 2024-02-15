import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarattiLorenzoComponent } from './pages/home/baratti-lorenzo.component';
import { IonicComponent } from './pages/ionic/ionic.component';
import { ElectronComponent } from './pages/electron/electron.component';
import { FigmaComponent } from './pages/figma/figma.component';

const routes: Routes = [
  { path: 'home', component: BarattiLorenzoComponent },
  { path: 'ionic', component: IonicComponent },
  { path: 'electron', component: ElectronComponent },
  { path: 'figma', component: FigmaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarattiLorenzoRoutingModule { }
