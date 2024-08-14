import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countries-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  @Input() title: string = "";
  @Input() placeholder: string = "";

  searchBy(term: string):void {
    console.log(`Searching ${this.title}`);
    console.log({term});
  }
}
