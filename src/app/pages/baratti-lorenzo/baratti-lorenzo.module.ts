import { NgModule } from '@angular/core';

import { BarattiLorenzoRoutingModule } from './baratti-lorenzo-routing.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { BarattiLorenzoComponent } from './pages/home/baratti-lorenzo.component';
import { IonicComponent } from './pages/ionic/ionic.component';
import { ElectronComponent } from './pages/electron/electron.component';
import { FigmaComponent } from './pages/figma/figma.component';


@NgModule({
  declarations: [NavBarComponent, BarattiLorenzoComponent, IonicComponent, ElectronComponent, FigmaComponent],
  imports: [
    BarattiLorenzoRoutingModule, PrimeNgModule, SharedModule,
  ]
})
export class BarattiLorenzoModule { }
