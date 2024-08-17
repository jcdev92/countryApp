import { Component } from '@angular/core';
import { RoutesType } from '../../interfaces/Route.type';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public pagePlaceholder: string = 'Search country by name';
  public pageTitle: string = 'Country';
  public pageRoute: RoutesType = 'name';

}
