import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Input() public initialValue: string = ''
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  private debouncer: Subject<string> = new Subject<string>();
  private debauncerSubscription?: Subscription;

  ngOnInit(): void {
    this.debauncerSubscription = this.debouncer
    .pipe(
      debounceTime(700),
    )
    .subscribe(value => this.onSearch.emit(value));
  }

  ngOnDestroy(): void {
    this.debauncerSubscription?.unsubscribe();
  }

  emitSearch(value: string) {
    this.initialValue = value;
    this.onSearch.emit(value);
  }

  onAfterType(value: string) {
    this.initialValue = value;
    this.debouncer.next(value);
  }

}
