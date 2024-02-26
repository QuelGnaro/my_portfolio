import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBaby, Weight } from 'src/app/private/models/baby-stats/baby.model';
import { BabyStatsService } from 'src/app/private/services/baby-sats/baby-stats.service';

@Component({
  selector: 'app-add-baby',
  templateUrl: './add-baby.component.html',
  styleUrl: './add-baby.component.scss'
})
export class AddBabyComponent {
  babyRegistration: FormGroup;
  baby: IBaby;
  constructor(private fb: FormBuilder, private router: Router, private babyStatsService: BabyStatsService) {
    this.babyRegistration = this.fb.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      born: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  save() {
    this.baby = this.babyRegistration.value;
    this.baby.id = this.genId();
    this.babyStatsService.setBaby(this.baby);
    this.babyRegistration.reset();
    console.log(this.baby);

  }

  backHome() {
    this.router.navigate(['my-projects/baby-stats/home']);
  }

  genId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  }


}
