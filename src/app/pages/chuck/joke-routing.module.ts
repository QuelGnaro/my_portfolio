import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarsComponent } from './pages/avatars/avatars.component';
import { ChuckComponent } from './pages/chuck/chuck.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'avatar-list', component: AvatarsComponent },
    { path: 'avatar-detail/:avatarId', component: ChuckComponent },
    // { path: 'avatar-detail/:avatarId', loadChildren: () => import('./pages/chuck/chuck.module').then(m => m.ChuckModule) },
    { path: '', redirectTo: 'avatar-list', pathMatch: 'full' },
    { path: '**', redirectTo: 'avatar-list', }
  ])],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
