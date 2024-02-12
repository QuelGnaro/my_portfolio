import { NgModule } from '@angular/core';

import { HarryPotterRoutingModule } from './harry-potter-routing.module';
import { WizardDetailComponent } from './pages/wizard-detail/wizard-detail.component';
import { PotionDetailComponent } from './pages/potion-detail/potion-detail.component';
import { IngredientDetailComponent } from './pages/ingredient-detail/ingredient-detail.component';
import { HomeComponent } from './pages/wizards-list/home.component';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    WizardDetailComponent,
    PotionDetailComponent,
    IngredientDetailComponent
  ],
  imports: [HarryPotterRoutingModule, PrimeNgModule, SharedModule],
  providers: [],
})
export class HarryPotterModule { }
