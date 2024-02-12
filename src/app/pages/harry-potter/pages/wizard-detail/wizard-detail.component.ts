import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Wizard } from 'src/app/private/models/harry-potter/wizard.model';
import { HarryPotterService } from 'src/app/private/services/harry-potter/harry-potter.service';

@Component({
  selector: 'app-wizard-detail',
  templateUrl: './wizard-detail.component.html',
})
export class WizardDetailComponent implements OnInit {
  isLoading: boolean = true;
  wizardId: string = '';
  wizard: Wizard = new Wizard();

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;


  constructor(
    private route: ActivatedRoute,
    private harryPotterService: HarryPotterService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.wizardId = params['wizardId'];
    });
  }

  ngOnInit(): void {
    this.harryPotterService
      .getWizardById(this.wizardId)
      .subscribe((res: Wizard) => {
        this.wizard = res;
        this.isLoading = false;
      });

    this.items = [{ label: 'Wizard List', routerLink: ['wizard-list'] }, { label: 'Wizard Detail' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  elixirDetail(id: string) {
    this.router.navigate([`my-projects/harry-potter/wizard-detail/${this.wizardId}/elixir-detail/${id}`]);
  }
}
