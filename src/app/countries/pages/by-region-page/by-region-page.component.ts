import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public pagePlaceholder: string = 'Search country by region name';
  public pageTitle: string = 'Region';
  public pageRoute: string = 'region';
}
