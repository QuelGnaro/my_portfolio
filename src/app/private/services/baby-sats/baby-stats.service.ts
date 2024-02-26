import { Injectable } from '@angular/core';
import { Baby } from '../../models/baby-stats/baby.model';

@Injectable({
  providedIn: 'root'
})
export class BabyStatsService {
  babyArray: Baby[] = [];

  constructor() {
    const babies = JSON.parse(localStorage.getItem('babies'));
    if (babies) {
      this.babyArray = babies;
    }
  }

  setBaby(obj: Baby) {
    this.babyArray.push(obj);
    this.saveInLocalUpdate();
    return this.babyArray;
  }

  getBabies() {
    return this.babyArray;
  }

  getBabyById(id: string) {
    const foundBaby = this.babyArray.find((baby: Baby) => baby.id === id);
    if (foundBaby) {
      return foundBaby;
    } else {
      return null;
    }
  }

  updateBaby(baby: Baby) {
    const index = this.babyArray.findIndex((b: Baby) => b.id === baby.id);
    if (index) {
      this.babyArray[index] = baby;
      this.saveInLocalUpdate();
    }
  }

  saveInLocalUpdate() {
    localStorage.setItem('babies', JSON.stringify(this.babyArray));
  }
}
