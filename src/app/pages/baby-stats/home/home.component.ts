import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IBaby } from 'src/app/private/models/baby-stats/baby.model';
import { BabyStatsService } from 'src/app/private/services/baby-sats/baby-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  babies: IBaby[] = [];


  constructor(private babyService: BabyStatsService, private router: Router,) {
    this.babies = this.babyService.getBabies();
  }

  goToAddBaby() {
    this.router.navigate(['my-projects/baby-stats/add-new-baby']);
  }

  goToBabyDetail(id: string) {
    this.router.navigate(['my-projects/baby-stats/baby-detail', id]);
  }

}
