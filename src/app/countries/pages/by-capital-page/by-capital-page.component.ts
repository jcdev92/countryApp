import { Component } from '@angular/core';
import { RoutesType } from '../../interfaces/Route.type';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public pagePlaceholder: string = 'Search country by capital name';
  public pageTitle: string = 'Capital';
  public pageRoute: RoutesType = 'capital';
}
