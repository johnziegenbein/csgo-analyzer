import { Injectable } from '@angular/core';
import { DemoData } from './datastructures/demo-data';
import {MapEventParser} from './event-parsers/map-event-parser.service';
import {TeamEventParser} from './event-parsers/team-event-parser.service';
import {RoundEventParser} from './event-parsers/round-event-parser.service';
import {KillEventParser} from './event-parsers/kill-event-parser.service';

@Injectable({
  providedIn: 'root'
})
export class DemoParserDelegator {

  constructor(private mapEventAnalyzer: MapEventParser,
              private teamEventAnalyzer: TeamEventParser,
              private  roundEventAnalyzer: RoundEventParser,
              private killEventAnalyzer: KillEventParser) { }

  parseDemoFromCsv(csvDemo: string): DemoData {
    let demoData: DemoData = new DemoData();

    for (const demoEvent of csvDemo.split(/[\r\n]+/)) {
      const eventList = demoEvent.split(',');
      switch (eventList[0]) {
        case DemoEvent.MAP:
          this.mapEventAnalyzer.parseEventIntoDemoData(demoData, eventList);
          break;
        case DemoEvent.TEAM:
          this.teamEventAnalyzer.parseEventIntoDemoData(demoData, eventList);
          break;
        case DemoEvent.KILL:
          this.killEventAnalyzer.parseEventIntoDemoData(demoData, eventList);
          break;
        case DemoEvent.ROUND_END:
          this.roundEventAnalyzer.parseEventIntoDemoData(demoData, eventList);
          break;
        default:
          console.log('Empty or unknown event :' + demoEvent);
          break;
      }
    }
    console.log(demoData);
    return demoData;
  }
}

enum DemoEvent {
  MAP = 'Map',
  TEAM = 'Team',
  KILL = 'Kill',
  ROUND_END = 'round_end',
}
