import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Ingredient } from 'src/app/private/models/harry-potter/elixir.model';
import { HarryPotterService } from 'src/app/private/services/harry-potter/harry-potter.service';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
})
export class IngredientDetailComponent implements OnInit {
  isLoading: boolean = true;
  ingredientId: string = '';
  ingredient: Ingredient = new Ingredient();

  wizardId: string = '';
  elixirId: string = '';

  constructor(
    private route: ActivatedRoute,
    private harryPotterService: HarryPotterService
  ) {
    this.route.params.subscribe((params) => {
      this.wizardId = params['wizardId'];
      this.elixirId = params['elixirId'];
      this.ingredientId = params['ingredientId'];
    });
  }

  ngOnInit(): void {
    this.harryPotterService
      .getIngredientById(this.ingredientId)
      .subscribe((res: any) => {
        this.ingredient = res;
        this.setTimeout();
      });
  }

  setTimeout() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
