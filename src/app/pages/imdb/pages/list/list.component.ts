import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImdbService } from 'src/app/private/services/imdb/imdb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Output() sendSelected = new EventEmitter<any>();
  @Input() data: any = [];

  selectedMovie: any;
  show: boolean = true;
  id: any;

  constructor(private apiService: ImdbService) { }

  selectMovie(imdbId: string) {
    this.apiService.getMoviesDetails(imdbId).subscribe(
      (data) => {
        this.selectedMovie = data;
        this.sendSelected.emit(this.selectedMovie);
      }
    );
  }

}
