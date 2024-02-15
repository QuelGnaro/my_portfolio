import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ICategory } from 'src/app/private/models/chuck/category.model';
import { Joke } from 'src/app/private/models/chuck/joke.model';
import { JokeService } from 'src/app/private/services/chuck/joke.service';


@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {
  joke: Joke | null = null;
  text: string = 'Ti consiglio di premere uno dei bottoni qui sopra e di generare una battuta, prima che ti sfondi lo schermo con un mio calcio rotante!';
  categories: ICategory[] = [];
  show: boolean = false;

  constructor(private apiService: JokeService) { }
  ngOnInit(): void {
    this.apiService.getCategories();
  }

  generateRandomJoke() {
    this.apiService.getRandomJoke().subscribe(
      (data: Joke) => {
        this.joke = data;
        this.text = data.value;
      },
    );
    this.show = false;
  }

  showCategories() {
    this.show = !this.show;
    if (this.show) {
      this.apiService.getCategories().subscribe(
        (response: any) => {
          this.categories = response;
        },
      );
    }
  }

  generateCategoryJoke(category: any) {
    this.apiService.getJokeByCategory(category).subscribe(
      (data: any) => {
        this.joke = data;
        this.text = data.value;
      },
    );
  }
}
