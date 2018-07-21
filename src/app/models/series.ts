import { OnChanges, SimpleChanges } from '@angular/core';

export class Series implements OnChanges {
  _id: String;
  title: String;
  season: Number;
  episode: Number;
  url: String;

  constructor(o: any) {
    for(let k in o)
      this[k] = o[k];
  }
  
}
