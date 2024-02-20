import { Component } from '@angular/core';

@Component({
  selector: 'app-figma',
  templateUrl: './figma.component.html',
  styleUrl: './figma.component.scss'
})
export class FigmaComponent {
  visible: boolean = false;
  selectedImage: any;

  imagesWireframe = [
    {
      id: 1,
      url: 'assets/home/Screenshot 2024-02-19 102852.png',
    },
    {
      id: 2,
      url: 'assets/home/wireframe all.png',
    },
    {
      id: 3,
      url: 'assets/home/wireframe left.png',
    },
  ];

  showDialog(id?: number) {
    const result = this.imagesWireframe.find((image) => image.id === id);
    if (result) {
      this.selectedImage = result;
    }
    console.log(this.selectedImage);

    this.visible = true;
  }
}
