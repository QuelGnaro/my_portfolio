import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Wizard } from 'src/app/private/models/harry-potter/wizard.model';
import { HarryPotterService } from 'src/app/private/services/harry-potter/harry-potter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  wizards: Wizard[] = [];
  isLoading: boolean = false;

  layout: string = 'list';

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(
    private harryPotterService: HarryPotterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.harryPotterService.getWizards().subscribe((res: Wizard[]) => {
      this.wizards = res;
      this.isLoading = false;
    });
    this.items = [{ label: 'Wizard List', routerLink: ['wizard-list'] }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  wizardDetail(id: string) {
    this.router.navigate([`my-projects/harry-potter/wizard-detail/${id}`]);
  }
}
