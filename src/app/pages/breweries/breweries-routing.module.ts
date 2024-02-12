import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'breweries-list', component: HomeComponent },
  { path: 'brewery-detail/:breweriesId', component: BreweryDetailComponent },
  { path: '', redirectTo: 'breweries-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweriesRoutingModule { }
