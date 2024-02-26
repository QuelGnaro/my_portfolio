import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Baby } from 'src/app/private/models/baby-stats/baby.model';
import { BabyStatsService } from 'src/app/private/services/baby-sats/baby-stats.service';

@Component({
  selector: 'app-baby-detail',
  templateUrl: './baby-detail.component.html',
  styleUrl: './baby-detail.component.scss'
})
export class BabyDetailComponent {
  // variabile per ngif stat accordion
  stats: boolean = false;
  peeDisabled = true;
  poopDisabled = true;
  mealDisabled = true;
  weightDisabled = true;

  // variabile della modale
  visible: boolean = false;

  babyId: string = '';
  baby: Baby;

  // variabili per aggiornare ultimo valore peso registrato
  lastWeight: number;
  lastWeightDate: Date;

  // variabili chart
  data: any;
  options: any;

  constructor(private babyService: BabyStatsService, private route: ActivatedRoute, private router: Router,) {

    this.getBaby();

    if (this.baby.weights.length) {
      const newLastWeight = this.baby.weights.length - 1;
      this.lastWeight = this.baby.weights[newLastWeight].weight;
      this.lastWeightDate = this.baby.weights[newLastWeight].date;
    }
    this.updateStats();
    this.checkAccordion();
    this.sortAll();
  }

  ngOnInit() {
    const mealsWeight = this.baby.meals.map(meal => +meal.weight);
    const mealsDate = this.baby.meals.map(meal => meal.date);
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: [...mealsDate],
      datasets: [
        {
          label: 'Meal Dataset',
          data: [...mealsWeight],
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

  updateStats() {
    if (this.baby.weights.length != 0 || this.baby.pees.length != 0 || this.baby.poops.length != 0 || this.baby.meals.length != 0) {
      this.stats = true;
    }
  }

  // abilita disabilita accordion in detail del bambino 
  checkAccordion() {
    const pees = this.baby.pees.length;
    const poops = this.baby.poops.length;
    const weights = this.baby.weights.length;
    const meals = this.baby.meals.length;
    if (pees > 0) {
      this.peeDisabled = !this.peeDisabled;
    }
    if (poops > 0) {
      this.poopDisabled = !this.poopDisabled;
    }
    if (weights > 0) {
      this.weightDisabled = !this.weightDisabled;
    }
    if (meals > 0) {
      this.mealDisabled = !this.mealDisabled;
    }
  }

  updateBaby() {
    this.babyService.updateBaby(this.baby);
  }

  getBaby() {
    this.route.params.subscribe((params) => {
      this.babyId = params['babyId'];
      this.baby = this.babyService.getBabyById(this.babyId);
    });
  }

  sortAll() {
    const meals = this.baby.meals;
    const pees = this.baby.pees;
    const poops = this.baby.poops;
    const weights = this.baby.weights;
    // this.fromStringToDate();
    // meals.sort((a, b) => a.date.getTime() - b.date.getTime());
    // pees.sort((a, b) => a.date.getTime() - b.date.getTime());
    // poops.sort((a, b) => a.date.getTime() - b.date.getTime());
    // weights.sort((a, b) => a.date.getTime() - b.date.getTime());

  }

  // fromStringToDate() {
  //   const meals = this.baby.meals;
  //   const pees = this.baby.pees;
  //   const poops = this.baby.poops;
  //   const weights = this.baby.weights;
  //   meals.map(meal => {
  //     meal.date = new Date(meal.date);
  //   });
  //   pees.map(pee => {
  //     pee.date = new Date(pee.date);
  //   });
  //   poops.map(poop => {
  //     poop.date = new Date(poop.date);
  //   });
  //   weights.map(weight => {
  //     weight.date = new Date(weight.date);
  //   });
  // }

}
