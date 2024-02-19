import { Component } from '@angular/core';

@Component({
  selector: 'app-figma',
  templateUrl: './figma.component.html',
  styleUrl: './figma.component.scss'
})
export class FigmaComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
