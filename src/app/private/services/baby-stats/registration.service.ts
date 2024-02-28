import { Injectable } from '@angular/core';
import { IUser, User } from '../../models/baby-stats/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  usersArray: IUser[] = [];
  presentUser: string | undefined = undefined;
  constructor() { }

  saveUsers(obj: User) {
    const existingUser = this.usersArray.find((user) => user.name === obj.name);
    if (existingUser) {
      this.presentUser = 'User name presente';
    } else {
      this.usersArray.push((obj));
      localStorage.setItem('Users', JSON.stringify(this.usersArray));
    }
    return this.usersArray;
  }

  returnAlert() {
    return this.presentUser;
  }

  resetAlert() {
    this.presentUser = undefined;
  }
}
