import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ElixirDetail } from 'src/app/private/models/harry-potter/elixir.model';
import { HarryPotterService } from 'src/app/private/services/harry-potter/harry-potter.service';

@Component({
  selector: 'app-potion-detail',
  templateUrl: './potion-detail.component.html',
})
export class PotionDetailComponent implements OnInit {

  // variabili per loading
  isLoading: boolean = true;

  // variabili per elixir detail
  elixirId: string = '';
  elixir: ElixirDetail = new ElixirDetail();
  wizardId: string = '';

  constructor(
    private route: ActivatedRoute,
    private harryPotterService: HarryPotterService,
    private router: Router,
  ) {
    this.route.params.subscribe((params) => {
      this.elixirId = params['elixirId'];
      this.wizardId = params['wizardId'];
    });
  }

  ngOnInit(): void {
    this.getElixir();
  };

  inventorDetail(id: string) {
    this.router.navigate([`my-projects/harry-potter/wizard-detail/${id}`]);
  }

  ingredientDetail(id: string) {
    this.router.navigate([`my-projects/harry-potter/wizard-detail/${this.wizardId}/elixir-detail/${this.elixirId}/ingredient-detail/${id}`]);
  }

  getElixir() {
    this.harryPotterService
      .getElixirById(this.elixirId)
      .subscribe((res: ElixirDetail) => {
        this.elixir = res;
        this.isLoading = false;
      });
  }

  onItemClick(event) {
    console.log(event);
    this.route.url.subscribe(console.log);

  }
}
