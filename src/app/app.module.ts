import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
