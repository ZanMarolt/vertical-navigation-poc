import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable, BehaviorSubject, tap } from 'rxjs';
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
  position$!: Observable<number>; 
  positionSub$: BehaviorSubject<number> = new BehaviorSubject(0);

  ngOnInit() {
    this.cards = Array(this.cardCount).fill(1).map((_, index) => index + 1);
  }

  ngAfterViewInit() {
    this.position$ = this.viewPort.scrolledIndexChange.pipe(
      map((currIndex: number) => currIndex + 1),
      tap((num: number) => { this.positionSub$.next(num) }),
    );
  }

  up(): void {
    const position: number = this.positionSub$.getValue();
    this.viewPort.scrollToIndex(position - 2, 'smooth');
  }

  down(): void {
    const position: number = this.positionSub$.getValue();
    console.log(position);
    this.viewPort.scrollToIndex(position, 'smooth');
  }
}
