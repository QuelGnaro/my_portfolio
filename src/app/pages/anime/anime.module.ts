import { NgModule } from '@angular/core';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { HomeComponent } from './anime-list/home.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AnimeDetailComponent,
    EpisodeDetailComponent
  ],
  imports: [
    AnimeRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  providers: [],
})
export class AnimeModule { }
