import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, tap } from 'rxjs';
import { CardComponent } from './components/card.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;
  cardCount = 25;
  cards: number[] = [];
  title = 'vertical-navigation';

  // Menu
  position = 0;

  ngOnInit() {
    this.cards = Array(this.cardCount).fill(1).map((_, index) => index + 1);
  }

  ngAfterViewInit() {
    this.viewPort.scrolledIndexChange.pipe(
      tap((currIndex: number) => {
        console.log('scrolledIndexChange:', currIndex + 1);
      })
    ).subscribe();
  }

  // up(): void {
  //   this.position -= 1;
  //   // handle logic for up
  //   this.cardElements?.get(this.position)?.scroll();
  // }

  // down(): void {
  //   this.position += 1;
  //   // handle logic for down
  //   this.cardElements?.get(this.position)?.scroll();
  // }
}
