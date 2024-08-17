import { Component } from '@angular/core';
import { Region } from '../../interfaces/Region.type';
import { RoutesType } from '../../interfaces/Route.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public pagePlaceholder: string = 'Search country by region name';
  public pageTitle: string = 'Region';
  public pageRoute: RoutesType = 'region';
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ];
}
