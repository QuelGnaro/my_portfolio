import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IAvatar } from 'src/app/private/models/chuck/avatar.model';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
})
export class AvatarsComponent {
  dummyAvatrs: IAvatar[] = [
    {
      id: 1,
      name: 'Chuck Norris',
      description: "'They say Chuck Norris is so tough, there's no chin under his beard. There is only another fist.'",
      url: 'https://movieplayer.net-cdn.it/t/images/2003/08/12/chuck-norris-22803_jpg_400x0_crop_q85.jpg',
    },
    {
      id: 2,
      name: 'Jean Claude Van Damme',
      description: "'Jean Claude Van Damme doesn't wear a watch, HE decides what time it is.'",
      url: 'https://media.gqitalia.it/photos/5f7310b057a1f8730da58ed5/16:9/w_2560%2Cc_limit/1-%2520GettyImages-159842840.jpg',
    },
    {
      id: 3,
      name: 'Sylvester Stallone',
      description: "'What would you call spending 24 hours with Sylvester Stallone? Rocky around the clock.'",
      url: 'https://www.armieoltre.it/wp-content/uploads/2014/09/rambo-m60.jpg',
    },
    {
      id: 4,
      name: 'Ronnie Coleman',
      description: "'There is nothing stronger than love. Except Ronnie Coleman, he can squat 362kg!'",
      url: 'https://image-cdn.essentiallysports.com/wp-content/uploads/E7qAjXAX0AAmjHw.jpg',
    },
    {
      id: 5,
      name: 'Arnold Schwarzenegger',
      description: `'If Arnold Schwarzenegger's tombstone doesn't say "I'll be back..." Someone has made a grave mistake.'`,
      url: 'https://vengonofuoridallefottutepareti.files.wordpress.com/2019/02/terminator-2-tag-der-abrechnung-mit-arnold-schwarzenegger.jpg',
    },
  ];

  constructor(private router: Router) { }

  avatarDetails(id: number) {
    this.router.navigate([`my-projects/joke-app/avatar-detail/${id}`]);
  }
}
