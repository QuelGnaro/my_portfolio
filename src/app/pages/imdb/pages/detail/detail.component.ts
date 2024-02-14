import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImdbService } from 'src/app/private/services/imdb/imdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() dataSelected: any = [];
  selectedMovie: any;

  constructor(private route: ActivatedRoute, private apiService: ImdbService, private router: Router) { }

  selectMovie(imdbId: string) {
    this.apiService.getMoviesDetails(imdbId).subscribe(
      (data) => {
        this.selectedMovie = data;
        console.log(data);

      }
    );
  }
}


