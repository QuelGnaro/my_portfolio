import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Baby, Meal, Pee, Poop, Weight } from 'src/app/private/models/baby-stats/baby.model';
import { BabyStatsService } from 'src/app/private/services/baby-sats/baby-stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  meal: Meal;
  pee: Pee;
  poop: Poop;
  weight: Weight;

  babyId: string = '';
  baby: Baby;

  mealRegistration: any;
  peeRegistration: any;
  poopRegistration: any;
  weightRegistration: any;


  constructor(private fb: FormBuilder, private babyService: BabyStatsService, private router: Router, private route: ActivatedRoute) {
    this.mealRegistration = this.fb.group({
      meal: ['', Validators.required],
      weight: ['', Validators.required],
      date: ['', Validators.required],
      note: ['', Validators.required]
    });
    this.weightRegistration = this.fb.group({
      weight: ['', Validators.required],
      date: ['', Validators.required],
      note: ['', Validators.required]
    });
    this.peeRegistration = this.fb.group({
      date: ['', Validators.required],
      note: ['', Validators.required]
    });
    this.poopRegistration = this.fb.group({
      date: ['', Validators.required],
      note: ['', Validators.required]
    });
    this.getBaby();
  }

  backToBaby() {
    this.router.navigate([`my-projects/baby-stats/baby-detail/${this.babyId}`]);
  }

  saveMeal() {
    this.meal = this.mealRegistration.value;
    this.meal.id = this.genId();
    this.baby.meals.push(this.meal);
    // this.baby.meals.sort((a, b) => a.date.getTime() - b.date.getTime());
    this.updateBaby();
    this.mealRegistration.reset();
    console.log(this.baby);
  }
  savePee() {
    this.pee = this.peeRegistration.value;
    this.pee.id = this.genId();
    this.baby.pees.push(this.pee);
    this.updateBaby();
    this.peeRegistration.reset();
  }
  savePoop() {
    this.poop = this.poopRegistration.value;
    this.poop.id = this.genId();
    this.baby.poops.push(this.poop);
    this.updateBaby();
    this.poopRegistration.reset();
  }
  saveWeight() {
    this.weight = this.weightRegistration.value;
    this.weight.id = this.genId();
    this.baby.weights.push(this.weight);
    this.updateBaby();
    this.weightRegistration.reset();
  }

  genId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  }

  getBaby() {
    this.route.params.subscribe((params) => {
      this.babyId = params['babyId'];
      this.baby = this.babyService.getBabyById(this.babyId);
    });
  }

  updateBaby() {
    this.babyService.updateBaby(this.baby);
  }

}
