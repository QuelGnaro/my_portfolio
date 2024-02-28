import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Baby } from 'src/app/private/models/baby-stats/baby.model';
import { BabyStatsService } from 'src/app/private/services/baby-stats/baby-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  babies: Baby[] = [];


  constructor(private babyService: BabyStatsService, private router: Router,) {
    if (localStorage.getItem('babies')) {
      this.babies = this.babyService.getBabies();
    }
  }

  goToAddBaby() {
    this.router.navigate(['my-projects/baby-stats/add-new-baby']);
  }

  goToBabyDetail(id: string) {
    this.router.navigate(['my-projects/baby-stats/baby-detail', id]);
  }


}
