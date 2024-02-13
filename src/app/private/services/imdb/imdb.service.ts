import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private BASE_URL = 'http://search.imdbot.workers.dev/';

  constructor(private http: HttpClient) { }

  searchMovie(movieName: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}?q=${movieName}`).pipe(
      map((response: any) => {
        console.log(response);

        return response.description;
      })
    );
  }

  getMoviesDetails(imdbId: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}?tt=${imdbId}`).pipe(
      map((response: any) => {
        return {
          title: response.short.name,
          year: response.short.datePublished,
          description: response.short.description,
          image: response.short.image,
        };
      })
    );
  }

}
