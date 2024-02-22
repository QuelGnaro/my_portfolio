import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBabyComponent } from './add-baby/add-baby.component';
import { PeeComponent } from './pee/pee.component';
import { PoopComponent } from './poop/poop.component';
import { SleepComponent } from './sleep/sleep.component';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-new-baby', component: AddBabyComponent },
  { path: 'pee', component: PeeComponent },
  { path: 'poop', component: PoopComponent },
  { path: 'sleep', component: SleepComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BabyStatsRoutingModule { }
