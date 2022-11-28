import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() number: number | undefined;

  constructor(
    public host: ElementRef<HTMLElement>,
  ) {}

  scroll(): void {
    console.log('Scrolling to', this.number);
    this.host.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
