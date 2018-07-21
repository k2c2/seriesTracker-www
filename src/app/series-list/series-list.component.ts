import { Component, OnInit } from '@angular/core';

import { Series } from '../models/series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  seriesList: Array<Series> = [];

  constructor() {
    this.seriesList.push(new Series({
      _id: "3bef439d8ac9a8e54"
      title: "Everybody Hates Chris",
      url: "#",
      season: 3,
      episode: 18
    }));
  }

  ngOnInit() {
  }

  debugMe(e) {
    console.log(e.target.data);
  }

}
