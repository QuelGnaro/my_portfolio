import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Anime } from 'src/app/private/models/anime/anime.model';
import { AnimeService } from 'src/app/private/services/anime/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  // variabili per anime search
  search: string = '';
  animeList: Anime[] = [];
  selectedItem: any;

  // variabili per breadcrumb
  items: MenuItem[] | undefined = [{ label: 'Anime List', routerLink: ['anime-list'], style: { cursor: 'pointer' } }];
  home: MenuItem | undefined = { icon: 'pi pi-home', routerLink: '/' };

  // variabili per loading
  loading: boolean = false;
  loadAnimelist: boolean = false;
  searched: boolean = false;

  // variabili per paginator
  first = 0;
  rows = 10;

  constructor(private animeService: AnimeService, private router: Router) {
    // recupero la lista di anime precedentemente ricercata
    if (localStorage.getItem('searchedAnime')) {
      this.animeList = JSON.parse(localStorage.getItem('searchedAnime') || '');
      this.loadAnimelist = true;
      this.searched = true;
    }
  }

  searchAnime() {
    this.animeService.getAnime(this.search).subscribe((res) => {
      this.animeList = res;
      this.setTimeout();
      this.storeResearchedAnime();
    });
  }

  // metodo per navigare alla pagina di dettaglio dell'anime
  animeDetail(id: number) {
    this.router.navigate([`my-projects/anime/anime-detail/${id}`]);
  }

  // set timeout per loading
  setTimeout() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.loadAnimelist = true;
      this.searched = true;
    }, 1500);
  }

  // metodi per paginator
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.animeList ? this.first === this.animeList.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.animeList ? this.first === 0 : true;
  }

  // metodo per salvare la lista di anime ricercata
  storeResearchedAnime() {
    localStorage.setItem('searchedAnime', JSON.stringify(this.animeList));
  }

}
