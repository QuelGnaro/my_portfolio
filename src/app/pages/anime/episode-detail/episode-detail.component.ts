import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Anime } from 'src/app/private/models/anime/anime.model';
import { SingleEpisode } from 'src/app/private/models/anime/singleEpisode.model';
import { AnimeService } from 'src/app/private/services/anime/anime.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent {
  // variabili per episode detail
  episodeId: string = '';
  episode: SingleEpisode = new SingleEpisode();
  animeId: string = '';
  anime: Anime = new Anime();

  constructor(private animeService: AnimeService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.episodeId = params['episodeId'];
      this.animeId = params['animeId'];
      this.animeService.getAnimeById(this.animeId).subscribe((res) => {
        this.anime = res;
      });
      this.animeService.getEpisodesDetail(this.animeId, this.episodeId).subscribe((res: SingleEpisode) => {
        this.episode = res;
        console.log(this.episode);
      });
    });
  }

}
