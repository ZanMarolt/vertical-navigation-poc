import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserModule } from '@angular/platform-browser'
import { MockComponent } from "ng-mocks";

import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card.component";
import { SimpleService } from './simple.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      declarations: [
        AppComponent,
        MockComponent(CardComponent),
      ],
      providers: [
        { provide: SimpleService, useValue: { url: 'http://test-only.zan.sh' } }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should build', () => {
    expect(component.cdr).toBeDefined();
  });

  it('should render', () => {
    fixture.detectChanges();

    expect(component).toBeDefined();
  });
})