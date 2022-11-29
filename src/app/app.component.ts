import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent } from 'rxjs';
import { CardComponent } from './components/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @ViewChildren('card') cardElements: QueryList<CardComponent> | undefined;
  cardCount = 25;
  cards: number[] = [];
  title = 'vertical-navigation';

  // Menu
  position = 1;

  // Handle scroll
  scroll$ = fromEvent(window, 'scroll');

  constructor(readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cards = Array(this.cardCount).fill(1).map((_, index) => index + 1);

    this.scroll$.pipe(debounceTime(10)).subscribe(() => {
      const findVisible = this.cardElements?.find((value) => {

        const elBounds: DOMRect = value.host.nativeElement.getBoundingClientRect();

        return elBounds.top + elBounds.height > 0;
      });

      if(!findVisible) return;

      this.position = findVisible?.number ? findVisible.number : this.position;
      this.cdr.markForCheck();
    })
  }

  up(): void {
    this.cardElements?.get(this.position - 2)?.scroll();
  }

  down(): void {
    this.cardElements?.get(this.position)?.scroll();
  }
}
