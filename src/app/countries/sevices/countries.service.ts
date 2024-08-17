import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map, tap } from 'rxjs';
import { Country } from '../interfaces/countries';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/Region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    const cacheStore = localStorage.getItem('cacheStore');
    if (!cacheStore) return;
    this.cacheStore = JSON.parse(cacheStore);
  }

  searchCountries(route: string, term: string): Observable<Country[] | Country | null> {
    const url = `${this.apiUrl}/${route}/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => {
          if (route === 'alpha' &&  countries.length > 0) {
            return countries[0];
          }
          return countries;
        } ),
        catchError(() => of(null)),
        tap (countries => {
          if (route === 'capital') {
            this.cacheStore.byCapital = { term, countries: countries as Country[] };
          } else if (route === 'name') {
            this.cacheStore.byCountries = { term, countries: countries as Country[] };
          } else if (route === 'region') {
            this.cacheStore.byRegion = { region: term as Region, countries: countries as Country[] };
          }
        }),
        tap(() => this.saveToLocalStorage())
      );
  }

}
