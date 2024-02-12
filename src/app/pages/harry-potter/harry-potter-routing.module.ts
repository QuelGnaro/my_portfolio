import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/wizards-list/home.component';
import { IngredientDetailComponent } from './pages/ingredient-detail/ingredient-detail.component';
import { PotionDetailComponent } from './pages/potion-detail/potion-detail.component';
import { WizardDetailComponent } from './pages/wizard-detail/wizard-detail.component';


@NgModule({
  imports: [RouterModule.forChild(
    [{ path: 'wizard-list', component: HomeComponent },
    { path: 'wizard-detail/:wizardId', component: WizardDetailComponent },
    { path: 'wizard-detail/:wizardId/elixir-detail/:elixirId', component: PotionDetailComponent },
    { path: 'wizard-detail/:wizardId/elixir-detail/:elixirId/ingredient-detail/:ingredientId', component: IngredientDetailComponent },
    { path: '', redirectTo: 'wizard-list', pathMatch: 'full' },
      // { path: '**', redirectTo: 'wizard-list', pathMatch: 'full' },
    ])],
  exports: [RouterModule],
})
export class HarryPotterRoutingModule { }
