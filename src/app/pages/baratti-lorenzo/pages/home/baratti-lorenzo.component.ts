import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-baratti-lorenzo',
  templateUrl: './baratti-lorenzo.component.html',
  styleUrls: ['./baratti-lorenzo.component.scss']
})
export class BarattiLorenzoComponent {


  events1: any[] = [];


  ngOnInit() {
    this.events1 = [
      { status: 'About', icon: PrimeIcons.USER, color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'CV', icon: PrimeIcons.ID_CARD, color: '#673AB7' },
      { status: '24H BS', icon: PrimeIcons.BOOK, color: '#FF9800' },
      { status: 'Skills', icon: PrimeIcons.DESKTOP, color: '#607D8B' },
      { status: 'Contact', icon: PrimeIcons.PHONE, color: '#fff033' }
    ];


  }
}
