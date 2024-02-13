import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Brewery } from 'src/app/private/models/breweries/brewery.model';
import { BreweriesService } from 'src/app/private/services/breweries/breweries.service';


@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
})
export class BreweryDetailComponent implements OnInit {
  breweryId: string = '';
  brewery: Brewery = new Brewery();
  isLoading: boolean = true;

  //dynamicDialogRef per fare azioni sulla modale

  constructor(private apiService: BreweriesService, private config: DynamicDialogConfig) {
    this.breweryId = config.data.breweryId;

  }

  ngOnInit(): void {
    this.apiService.getBreweryById(this.breweryId).subscribe(((res: Brewery) => {
      this.brewery = res;
      this.setTimeout();
    }));
  }

  setTimeout() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
