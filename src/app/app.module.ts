import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesCardComponent } from './series-card/series-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesListComponent,
    SeriesCardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
