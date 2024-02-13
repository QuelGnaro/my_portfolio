import { NgModule } from '@angular/core';

import { ImdbRoutingModule } from './imdb-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    ImdbRoutingModule, PrimeNgModule, SharedModule
  ]
})
export class ImdbModule { }
