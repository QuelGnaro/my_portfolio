import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/private/models/baby-stats/user.model';
import { RegistrationService } from 'src/app/private/services/baby-stats/registration.service';

@Component({
  selector: 'app-registration',

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  userRegistration: FormGroup;
  users: IUser;
  visible: boolean = false;
  alert: any;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {
    this.userRegistration = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  save() {
    this.users = this.userRegistration.value;
    this.registrationService.saveUsers(this.users);
    this.alert = this.registrationService.returnAlert();


    if (!this.alert) {

      this.router.navigate(['my-projects/baby-stats/login']);
    } else {
      window.alert(this.alert);
      this.registrationService.resetAlert();
    }
  }
}