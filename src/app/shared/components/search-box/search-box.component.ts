import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input() placeholder: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  emitSearch(value: string) {
    this.onSearch.emit(value);
  }

}
