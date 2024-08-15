import { Component, Input } from '@angular/core';
import { CountriesService } from '../../sevices/countries.service';
import { Country } from '../../interfaces/countries';
import { map } from 'rxjs';

@Component({
  selector: 'app-countries-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  @Input() title: string = "";
  @Input() placeholder: string = "";
  @Input() route: string = "";

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchBy(route:string, term: string):void {
    this.countriesService.searchCountries(route, term)
    .pipe( map( countries => Array.isArray(countries) ? countries: [] )).subscribe( countries => { this.countries = countries; });
    }
}
