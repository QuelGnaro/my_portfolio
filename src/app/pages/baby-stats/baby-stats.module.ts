import { NgModule } from '@angular/core';

import { BabyStatsRoutingModule } from './baby-stats-routing.module';
import { HomeComponent } from './home/home.component';
import { AddBabyComponent } from './add-baby/add-baby.component';
import { PeeComponent } from './pee/pee.component';
import { PoopComponent } from './poop/poop.component';
import { SleepComponent } from './sleep/sleep.component';
import { FoodComponent } from './food/food.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HomeComponent, AddBabyComponent, PeeComponent, PoopComponent, SleepComponent, FoodComponent, RegistrationComponent, SettingsComponent, LoginComponent],
  imports: [
    BabyStatsRoutingModule, SharedModule, PrimeNgModule
  ]
})
export class BabyStatsModule { }
