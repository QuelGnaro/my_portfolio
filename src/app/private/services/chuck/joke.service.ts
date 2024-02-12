import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICategory } from '../../models/chuck/category.model';
import { Joke } from '../../models/chuck/joke.model';


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  private Base_URL = 'https://api.chucknorris.io/jokes';

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${this.Base_URL}/random`);
  }

  getCategories() {
    return this.http.get(`${this.Base_URL}/categories`);
  }

  getJokeByCategory(category: ICategory) {
    return this.http.get(`${this.Base_URL}/random?category=${category}`);
  }
}
