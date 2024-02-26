import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBabyComponent } from './add-baby/add-baby.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BabyDetailComponent } from './baby-detail/baby-detail.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-new-baby', component: AddBabyComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'baby-detail/:babyId', component: BabyDetailComponent },
  { path: 'baby-detail/stats/:babyId', component: StatsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BabyStatsRoutingModule { }
