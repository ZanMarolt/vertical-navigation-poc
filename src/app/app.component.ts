import { ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  position = 0;

  // Handle scroll
  scroll$ = fromEvent(window, 'scroll')
  tmpScrolldebug$ = new BehaviorSubject(0);

  ngOnInit() {
    this.cards = Array(this.cardCount).fill(1).map((_, index) => index + 1);

    this.scroll$.pipe(debounceTime(100)).subscribe(() => {

      this.tmpScrolldebug$.next(window.scrollY);

      const findVisible = this.cardElements?.find((value, index) => {

        const elBounds = value.host.nativeElement.getBoundingClientRect();

        return (
          elBounds.top >= 0
        );
      });

      this.position = findVisible?.number ? findVisible.number : this.position;
    })
  }

  up(): void {
    this.position -= 1;
    // handle logic for up
    this.cardElements?.get(this.position)?.scroll();
  }

  down(): void {
    this.position += 1;
    // handle logic for down
    this.cardElements?.get(this.position)?.scroll();
  }
}
