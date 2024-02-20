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
  visible: boolean = false;

  constructor(private myService: MyService) {
    this.skillsArray = this.myService.skillsArray;
  }

  showDialog(id: number) {
    const result = this.skillsArray.find((skill) => skill.id === id);
    if (result) {
      this.selectedSkill = result;
    }
    // this.selectedSkill = this.skillsArray.filter((skill) => skill.id === id); restituisce un array
    console.log(this.selectedSkill);
    this.visible = true;
  }
}
