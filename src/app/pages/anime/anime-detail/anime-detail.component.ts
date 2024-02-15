import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UIChart } from 'primeng/chart';
import { Anime } from 'src/app/private/models/anime/anime.model';
import { Episode } from 'src/app/private/models/anime/episodes.model';
import { Statistic } from 'src/app/private/models/anime/statistics.model';
import { AnimeService } from 'src/app/private/services/anime/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {
  @ViewChild('chart') myChartDataset: UIChart;

  // elements for the anime detail
  animeId: string = '';
  anime: Anime = new Anime();
  statistics: Statistic = new Statistic();
  episodes: Episode[] = [];

  // elements for the chart
  data: any;
  showChart: boolean = false;
  options: any;


  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService, private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.animeId = params['animeId'];
      this.animeService.getAnimeById(this.animeId).subscribe((res: Anime) => {
        this.anime = res;
      });
      this.animeService
        .getEpisodes(this.animeId)
        .subscribe((res: Episode[]) => {
          this.episodes = res;
        });
    });
  }

  ngOnInit() {
    this.chartData();
    this.getStatistics();
  };


  chartData() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['Watching', 'Completed', 'On Hold', 'Dropped', 'Plan to Watch'],
      datasets: [
        {
          data: [1, 1, 1, 1, 1],
          backgroundColor: [documentStyle.getPropertyValue('--purple-300'), documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--blue-300'), documentStyle.getPropertyValue('--red-300'), documentStyle.getPropertyValue('--indigo-300')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--indigo-500')]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

  }

  updateDataset() {
    console.log('prima di aggiornare i dati', this.myChartDataset.chart.data.datasets[0].data);
    this.myChartDataset.chart.data.datasets[0].data = [this.statistics.watching, this.statistics.completed, this.statistics.on_hold, this.statistics.dropped, this.statistics.plan_to_watch];
    this.myChartDataset.chart.update();
    console.log('dopo aver aggiornato', this.myChartDataset.chart.data.datasets[0].data);
  }


  getStatistics() {
    this.animeService
      .getStatistics(this.animeId)
      .subscribe((res: Statistic) => {
        this.statistics = res;
        this.showChart = true;
        setTimeout(() => {
          this.updateDataset();
        }, 2000);
      });
  }

  goToDetailEpisode(id: number) {
    this.router.navigate([`my-projects/anime/anime-detail/${this.animeId}/episode-detail/${id}`]);
  }
}


