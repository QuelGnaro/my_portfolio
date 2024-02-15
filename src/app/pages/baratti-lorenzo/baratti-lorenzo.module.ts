import { NgModule } from '@angular/core';

import { BarattiLorenzoRoutingModule } from './baratti-lorenzo-routing.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BarattiLorenzoComponent } from './pages/home/baratti-lorenzo.component';
import { CvComponent } from './pages/cv/cv.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


@NgModule({
  declarations: [BarattiLorenzoComponent, CvComponent, SkillsComponent, AboutComponent, ContactsComponent],
  imports: [
    BarattiLorenzoRoutingModule, PrimeNgModule, SharedModule
  ]
})
export class BarattiLorenzoModule { }
