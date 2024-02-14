import { Component, EventEmitter, Output } from '@angular/core';
import { ImdbService } from 'src/app/private/services/imdb/imdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedMovie: any;
  searchResults: any[] = [];
  input: any = '';
  isSelected: boolean = false;

  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() detailSelected = new EventEmitter<string>();

  constructor(private apiService: ImdbService) { }

  searchMovie() {

    this.isSelected = false;
    this.apiService.searchMovie(this.input).subscribe(
      (res: any) => {
        this.searchResults = res;
        this.searchQueryChange.emit(this.input);
      });

  }

  onRecivedSelected(selectedMovie: any) {
    this.selectedMovie = selectedMovie;
    this.isSelected = true;
  }
}
