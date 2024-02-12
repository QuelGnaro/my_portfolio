import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Brewery } from '../../models/breweries/brewery.model';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {
  baseUrl = 'https://api.openbrewerydb.org/v1';

  constructor(private http: HttpClient) { }

  getBreweries() {
    return this.http.get(`${this.baseUrl}/breweries`)
      .pipe(map((res: any) => res.map((brewery: any) => new Brewery(brewery))));
  }

  searchBrewery(name: string) {
    return this.http.get(`${this.baseUrl}/breweries?by_name=${name}`)
      .pipe(map((res: any) => res.map((brewery: any) => new Brewery(brewery))));;
  }

  getBreweryById(id: string) {
    return this.http.get(`${this.baseUrl}/breweries/${id}`).pipe(map((res: any) => new Brewery(res)));
  }



}
