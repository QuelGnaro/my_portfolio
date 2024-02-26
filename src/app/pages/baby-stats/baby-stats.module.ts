import { NgModule } from '@angular/core';

import { BabyStatsRoutingModule } from './baby-stats-routing.module';
import { HomeComponent } from './home/home.component';
import { AddBabyComponent } from './add-baby/add-baby.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BabyDetailComponent } from './baby-detail/baby-detail.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [HomeComponent, AddBabyComponent, RegistrationComponent, LoginComponent, BabyDetailComponent, StatsComponent],
  imports: [
    BabyStatsRoutingModule, SharedModule, PrimeNgModule
  ]
})
export class BabyStatsModule { }
