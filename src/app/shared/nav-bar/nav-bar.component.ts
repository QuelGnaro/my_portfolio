import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/my-projects/baratti-lorenzo/home'] },
      { label: 'Electron', icon: 'pi pi-fw pi-calendar', routerLink: ['/my-projects/baratti-lorenzo/electron'] },
      { label: 'Figma', icon: 'pi pi-fw pi-pencil', routerLink: ['/my-projects/baratti-lorenzo/figma'] },
      { label: 'Ionic', icon: 'pi pi-fw pi-file', routerLink: ['/my-projects/baratti-lorenzo/ionic'] },
    ];

    this.activeItem = this.items[0];
  }
}
