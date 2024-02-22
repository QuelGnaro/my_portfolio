import { Injectable } from '@angular/core';
import { IBaby } from '../../models/baby-stats/baby.model';

@Injectable({
  providedIn: 'root'
})
export class BabyStatsService {
  babyArray: IBaby[] = [];

  constructor() { }

  setBaby(obj: IBaby) {
    this.babyArray.push(obj);
    localStorage.setItem('babies', JSON.stringify(this.babyArray));
    return this.babyArray;
  }

  getBabies() {
    return JSON.parse(localStorage.getItem('babies'));
  }
}
