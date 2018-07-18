import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.css']
})
export class SeriesCardComponent implements OnInit {
  title: string = "Everybody hates Chris";
  season: number = 3;
  episode: number = 2;
  url: string;

  constructor() {
    this.url = ""
  }

  ngOnInit() {
  }

}
