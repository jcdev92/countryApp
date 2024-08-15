import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CountriesService } from '../../sevices/countries.service';
import { Country, Translation } from '../../interfaces/countries';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  public route: string = 'alpha';
  public country?: Country;
  public translations: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.countriesService.searchCountries(this.route, id)),
      map(response => {
        if (Array.isArray(response)) {
          return response[0];
        }
        if (!response) return null;
        this.translations = Object.keys(response.translations);
        return response;
      })
    )
      .subscribe(countries => {
        if (!countries) return this.router.navigateByUrl('');
        return this.country = countries;
      })

  }

}
