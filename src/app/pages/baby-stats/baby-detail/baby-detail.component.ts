import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBaby } from 'src/app/private/models/baby-stats/baby.model';
import { BabyStatsService } from 'src/app/private/services/baby-sats/baby-stats.service';

@Component({
  selector: 'app-baby-detail',
  templateUrl: './baby-detail.component.html',
  styleUrl: './baby-detail.component.scss'
})
export class BabyDetailComponent {
  stats: any; // bo forse non lo uso
  baby: IBaby;
  visible: boolean = false;
  babyId: string = '';

  data: any;

  options: any;

  constructor(private babyService: BabyStatsService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.babyId = params['babyId'];
    });
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }


  backHome() {
    this.router.navigate(['my-projects/baby-stats/home']);
  }

  showDialog() {
    this.visible = true;
  }

  goToStats() {
    this.router.navigate([`my-projects/baby-stats/baby-detail/stats/${this.babyId}`]);
  }





}
