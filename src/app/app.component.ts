import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { CardComponent } from './components/card.component';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly cdr = inject(ChangeDetectorRef);
  readonly ss = inject(SimpleService);
  
  @ViewChildren('card') cardElements!: QueryList<CardComponent>;
  private _cardCount = 25;
  cards: number[] = [];
  
  // Menu
  position = 0;
  
  // Handle scroll
  scroll$ = fromEvent(window, 'scroll');
  
  ngOnInit() {
    this.cards = Array(this._cardCount).fill(1).map((_, index) => index + 1);

    console.log(this.ss.url);

    this.scroll$.pipe(debounceTime(10)).subscribe(() => {
      const findVisible = this.cardElements?.find((value) => {
        const elBounds: DOMRect = value.host.nativeElement.getBoundingClientRect();

        return elBounds.top + elBounds.height * 0.75 > 0;
      });

      if(!findVisible) return;

      this.position = findVisible.number ? findVisible.number - 1 : this.position;
      this.cdr.markForCheck();
    })
  }

  up(): void {
    this.cardElements.get(this.position - 1)?.scroll();
  }

  down(): void {
    this.cardElements.get(this.position + 1)?.scroll();
  }
}
