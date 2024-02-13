import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Brewery } from 'src/app/private/models/breweries/brewery.model';
import { BreweriesService } from 'src/app/private/services/breweries/breweries.service';
import { BreweryDetailComponent } from '../brewery-detail/brewery-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.componetn.scss'
})
export class HomeComponent implements OnInit {
  searchInput: string = '';
  onGetBreweries: Brewery[] = [];
  onSearchBreweries: Brewery[] = [];
  isLoading: boolean = true;
  isFavorite: boolean = false;
  favoriteBreweries: Brewery[] = [];

  // variabili per paginator
  first = 0;
  rows = 10;

  // variabile per modale
  visible: boolean = false;

  constructor(private router: Router, private apiService: BreweriesService, private dialogueService: DialogService) {
    if (localStorage.getItem('breweriesList')) {
      this.onSearchBreweries = JSON.parse(localStorage.getItem('breweriesList') || '');
    }
  }

  // chiamo e stampo un carosello di birrerie
  ngOnInit(): void {
    this.apiService.getBreweries().subscribe((res: Brewery[]) => {
      this.onGetBreweries = res;
      console.log(this.onGetBreweries);

      this.isLoading = false;
      localStorage.getItem('favouriteBrewery') ? this.isFavorite = true : this.isFavorite = false;
    });
  }
  // riecerca e stampa una lista di birrerie
  search() {
    this.apiService.searchBrewery(this.searchInput).subscribe((res: Brewery[]) => {
      this.onSearchBreweries = res;
      this.storeResearchBreweries();
      this.isLoading = false;
    });
  }
  // naviga alla pagina di dettaglio della birreria
  goToDetails(id: string) {
    this.router.navigate([`my-projects/breweries/brewery-detail/${id}`]);
  }

  storeResearchBreweries() {
    localStorage.setItem('breweriesList', JSON.stringify(this.onSearchBreweries));
  }

  pageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.onSearchBreweries ? this.first === this.onSearchBreweries.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.onSearchBreweries ? this.first === 0 : true;
  }

  showDialog(id: string) {
    this.dialogueService.open(BreweryDetailComponent, {
      data: {
        breweryId: id
      }
    });
  }
}
