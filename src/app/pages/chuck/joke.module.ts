import { NgModule } from '@angular/core';

import { AvatarsComponent } from './pages/avatars/avatars.component';
import { JokeRoutingModule } from './joke-routing.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { ChuckComponent } from './pages/chuck/chuck.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AvatarsComponent, ChuckComponent
  ],
  imports: [
    JokeRoutingModule, PrimeNgModule, SharedModule
  ],
  providers: [],
})
export class JokeModule { }