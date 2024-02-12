import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brewery } from 'src/app/private/models/breweries/brewery.model';
import { BreweriesService } from 'src/app/private/services/breweries/breweries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  searchInput: string = '';
  onGetBreweries: Brewery[] = [];
  onSearchBreweries: Brewery[] = [];
  isLoading: boolean = true;
  isFavorite: boolean = false;
  favoriteBreweries: Brewery[] = [];

  constructor(private router: Router, private apiService: BreweriesService) { }

  // chiamo e stampo un carosello di birrerie
  ngOnInit(): void {
    this.apiService.getBreweries().subscribe((res: Brewery[]) => {
      this.onGetBreweries = res;
      this.isLoading = false;
      localStorage.getItem('favouriteBrewery') ? this.isFavorite = true : this.isFavorite = false;
    });
  }
  // riecerca e stampa una lista di birrerie
  search() {
    this.apiService.searchBrewery(this.searchInput).subscribe((res: Brewery[]) => {
      this.onSearchBreweries = res;
      this.isLoading = false;
    });
  }
  // naviga alla pagina di dettaglio della birreria
  goToDetails(id: string) {
    this.router.navigate([`brewery-detail/${id}`]);
  }
}
