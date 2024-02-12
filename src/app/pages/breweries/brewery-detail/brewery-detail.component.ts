import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brewery } from 'src/app/private/models/breweries/brewery.model';
import { BreweriesService } from 'src/app/private/services/breweries/breweries.service';


@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
})
export class BreweryDetailComponent implements OnInit {
  breweryId: string = '';
  brewery: Brewery = new Brewery();

  constructor(private apiService: BreweriesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.breweryId = params['id'];
    });
  }

  ngOnInit(): void {
    this.apiService.getBreweryById(this.breweryId).subscribe(((res: Brewery) => {
      this.brewery = res;

    }));
  }
}
