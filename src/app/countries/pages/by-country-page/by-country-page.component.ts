import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public pagePlaceholder: string = 'Search country by name';
  public pageTitle: string = 'Country';
  public pageRoute: string = 'name';

}
