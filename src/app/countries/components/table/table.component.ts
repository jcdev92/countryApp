import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'page-table',
  templateUrl: './table.component.html',
  styles: `
  img {
    border-radius: 20%;
    height: 25px;
    width: 25px;
    object-fit: cover;
  }`
})
export class TableComponent {
  @Input() countries: Country[] = [];
  @Input() Country: Country | null = null;
  @Input() route: string = '';

}
