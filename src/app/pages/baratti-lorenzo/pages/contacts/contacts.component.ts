import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'About', icon: 'pi pi-fw pi-user', routerLink: 'about-me' },
      { label: 'CV', icon: 'pi pi-fw pi-id-card', routerLink: 'my-cv' },
      { label: 'Skills', icon: 'pi pi-fw pi-briefcase', routerLink: 'my-skills' },
      { label: 'Contacts', icon: 'pi pi-fw pi-phone', routerLink: 'my-contacts' },
    ];

    this.activeItem = this.items[0];
  }
}
