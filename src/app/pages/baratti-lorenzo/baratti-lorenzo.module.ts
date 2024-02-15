import { NgModule } from '@angular/core';

import { BarattiLorenzoRoutingModule } from './baratti-lorenzo-routing.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BarattiLorenzoComponent } from './pages/home/baratti-lorenzo.component';


@NgModule({
  declarations: [BarattiLorenzoComponent],
  imports: [
    BarattiLorenzoRoutingModule, PrimeNgModule, SharedModule
  ]
})
export class BarattiLorenzoModule { }
