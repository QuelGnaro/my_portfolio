import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/private/models/baby-stats/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string;
  userPassword: string;

  userLogin: IUser[] = [];

  constructor(private router: Router) {
    const user = localStorage.getItem('Users');
    if (user) {
      this.userLogin = JSON.parse(user);
      console.log(this.userLogin);

    }
  }

  login() {
    const userName = this.userLogin.find(user => user.name === this.userName);
    if (userName) {
      this.router.navigate(['my-projects/baby-stats/home']);
    } else {
      window.alert('User not found');
    }
  }

  navigateToRegistration() {
    this.router.navigate(['my-projects/baby-stats/registration']);
  }
}
