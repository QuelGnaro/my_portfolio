import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarattiLorenzoComponent } from './pages/home/baratti-lorenzo.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { CvComponent } from './pages/cv/cv.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: BarattiLorenzoComponent },
  { path: 'my-skills', component: SkillsComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'my-cv', component: CvComponent },
  { path: 'my-contacts', component: ContactsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarattiLorenzoRoutingModule { }
