import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import { HomeComponent } from './home/home.component';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { BreweriesRoutingModule } from './breweries-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    BreweryDetailComponent
  ],
  imports: [
    HttpClientModule, PrimeNgModule, BreweriesRoutingModule, SharedModule
  ],
  providers: [],
})
export class BreweriesModule { }
