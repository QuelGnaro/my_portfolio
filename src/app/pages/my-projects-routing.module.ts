import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'baby-stats', data: { breadcrumb: 'Baby-Stats' }, loadChildren: () => import('./baby-stats/baby-stats.module').then(m => m.BabyStatsModule) },
  { path: 'breweries', data: { breadcrumb: 'Breweries' }, loadChildren: () => import('./breweries/breweries.module').then(m => m.BreweriesModule) },
  { path: 'anime', data: { breadcrumb: 'Anime Search' }, loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule) },
  { path: 'harry-potter', data: { breadcrumb: 'Harry Potter' }, loadChildren: () => import('./harry-potter/harry-potter.module').then(m => m.HarryPotterModule) },
  { path: 'joke-app', data: { breadcrumb: 'Joke App' }, loadChildren: () => import('./chuck/joke.module').then(m => m.JokeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProjectsRoutingModule { }
