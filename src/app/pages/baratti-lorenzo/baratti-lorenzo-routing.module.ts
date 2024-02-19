import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarattiLorenzoComponent } from './pages/home/baratti-lorenzo.component';
import { IonicComponent } from './pages/ionic/ionic.component';
import { ElectronComponent } from './pages/electron/electron.component';
import { FigmaComponent } from './pages/figma/figma.component';

const routes: Routes = [
  { path: 'my-portfolio/home', component: BarattiLorenzoComponent },
  { path: 'my-portfolio/ionic', component: IonicComponent },
  { path: 'my-portfolio/electron', component: ElectronComponent },
  { path: 'my-porfolio/figma', component: FigmaComponent },
  { path: '', redirectTo: 'my-portfolio/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarattiLorenzoRoutingModule { }
