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
    window.scrollTo({
      top: window.scrollY + this.host.nativeElement.getBoundingClientRect().y + 1,
      behavior: 'smooth',
    });
  }
}
