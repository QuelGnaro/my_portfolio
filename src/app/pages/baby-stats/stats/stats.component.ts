import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal, Pee, Poop } from 'src/app/private/models/baby-stats/baby.model';
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
  babyId: string = '';
  mealRegistration: any;
  peeRegistration: any;
  poopRegistration: any;

  mealsArray: Meal[] = [];
  peesArray: Pee[] = [];
  poopsArray: Poop[] = [];


  constructor(private fb: FormBuilder, private babyService: BabyStatsService, private router: Router, private route: ActivatedRoute) {
    this.mealRegistration = this.fb.group({
      meal: ['', Validators.required],
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

    this.route.params.subscribe((params) => {
      this.babyId = params['babyId'];
    });
  }

  backToBaby() {
    this.router.navigate([`my-projects/baby-stats/baby-detail/${this.babyId}`]);
  }

  saveMeal() {
    this.meal = this.mealRegistration.value;
    this.meal.id = this.genId();
    this.mealsArray.push(this.meal);
    this.mealRegistration.reset();
    console.log(this.meal);

  }
  savePee() {
    this.pee = this.peeRegistration.value;
    this.pee.id = this.genId();
    this.peesArray.push(this.pee);
    this.peeRegistration.reset();
    console.log(this.pee);

  }
  savePoop() {
    this.poop = this.poopRegistration.value;
    this.poop.id = this.genId();
    this.poopsArray.push(this.poop);
    this.poopRegistration.reset();
    console.log(this.poop);
  }

  genId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  }
}
