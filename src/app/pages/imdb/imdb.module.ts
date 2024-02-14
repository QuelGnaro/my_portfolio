import { NgModule } from '@angular/core';

import { ImdbRoutingModule } from './imdb-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    ImdbRoutingModule, SharedModule, PrimeNgModule
  ]
})
export class ImdbModule { }
