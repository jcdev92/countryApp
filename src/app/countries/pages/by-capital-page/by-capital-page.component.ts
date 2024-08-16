import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public pagePlaceholder: string = 'Search country by capital name';
  public pageTitle: string = 'Capital';
  public pageRoute: string = 'capital';
}
