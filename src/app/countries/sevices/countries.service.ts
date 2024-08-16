import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map, delay } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) { }

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
        delay(1000)
      );
  }

}
