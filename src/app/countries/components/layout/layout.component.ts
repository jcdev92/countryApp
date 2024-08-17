import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../sevices/countries.service';
import { Country } from '../../interfaces/countries';
import { map } from 'rxjs';
import { Region } from '../../interfaces/Region.type';


@Component({
  selector: 'app-countries-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent implements OnInit {
  @Input() public title: string = "";
  @Input() public placeholder: string = "";
  @Input() public route: string = "";
  @Input() public regions?: Region[] = [];
  @Input() public initialValue: string = "";
  public countries: Country[] = [];
  public selectedRegion?: Region;
  public isLoading: boolean = false;


  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    if (this.route === 'region') {
      this.countries = this.countriesService.cacheStore.byRegion.countries
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    }
    if (this.route === 'name') {
      this.countries = this.countriesService.cacheStore.byCountries.countries
      this.initialValue = this.countriesService.cacheStore.byCountries.term;
    }
    if (this.route === 'capital') {
      this.countries = this.countriesService.cacheStore.byCapital.countries
      this.initialValue = this.countriesService.cacheStore.byCapital.term;
    }
  }

  searchBy(route:string, term: string):void {
    this.isLoading = true;

    // if term is a region, save term in region variable
    if (this.regions?.includes(term as Region)) this.selectedRegion = term as Region;

    this.countriesService.searchCountries(route, term)
    .pipe(map( countries => Array.isArray(countries) ? countries: [] )).subscribe( countries => { this.countries = countries; this.isLoading = false; });
    }


}
