import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { HomeComponent } from './anime-list/home.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';




@NgModule({
  imports: [RouterModule.forChild([
    { path: 'search-list', component: HomeComponent, },
    { path: 'anime-detail/:animeId', component: AnimeDetailComponent },
    { path: 'anime-detail/:animeId/episode-detail/:episodeId', component: EpisodeDetailComponent },
    { path: '', redirectTo: 'search-list', pathMatch: 'full', },
    // { path: '**', redirectTo: 'search-list', pathMatch: 'full' },
  ]
  )],
  exports: [RouterModule],
})
export class AnimeRoutingModule { }
