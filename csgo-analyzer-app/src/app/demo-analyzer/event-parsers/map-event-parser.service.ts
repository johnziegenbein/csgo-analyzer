import {Injectable} from '@angular/core';
import {EventParser} from './event-parser.service';
import {DemoData} from '../datastructures/demo-data';
import {Map} from '../datastructures/match-data';

@Injectable({
  providedIn: 'root'
})
export class MapEventParser implements EventParser {
  constructor() { }

  parseEventIntoDemoData(demoData: DemoData, eventList: string[]) {
    demoData.matchData.map = eventList[1] as Map;
  }
}
