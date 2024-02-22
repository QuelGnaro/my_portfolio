import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-figma',
  templateUrl: './figma.component.html',
  styleUrl: './figma.component.scss'
})
export class FigmaComponent {
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  name = "Angular";
  visible: boolean = false;
  selectedImage: any;
  isPlay: boolean = false;

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

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }
}
