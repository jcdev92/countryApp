import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../sevices/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  public route: string = 'alpha';
  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.countriesService.searchCountries(this.route, id)))
      .subscribe(country => console.log({country}))
  }

}
