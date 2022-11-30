import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        AppComponent,
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should build', () => {
    expect(component.cdr).toBeDefined();
  });
})