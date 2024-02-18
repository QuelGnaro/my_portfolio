import { Component } from '@angular/core';
import { MyService } from 'src/app/private/services/baratti-lorenzo/my.service';

@Component({
  selector: 'app-baratti-lorenzo',
  templateUrl: './baratti-lorenzo.component.html',
  styleUrls: ['./baratti-lorenzo.component.scss']
})
export class BarattiLorenzoComponent {
  selectedSkill: any;
  skillsArray = [];

  constructor(private myService: MyService) {
    this.skillsArray = this.myService.skillsArray;
  }

  visible: boolean = false;
  showDialog(id: number) {
    this.visible = true;
  }
}
