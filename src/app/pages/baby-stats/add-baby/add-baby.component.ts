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
  babies: IBaby;
  constructor(private fb: FormBuilder, private router: Router, private babyStatsService: BabyStatsService) {
    this.babyRegistration = this.fb.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      born: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  save() {
    this.babies = this.babyRegistration.value;
    this.babyStatsService.setBaby(this.babies);
    this.babyRegistration.reset();
  }


}
