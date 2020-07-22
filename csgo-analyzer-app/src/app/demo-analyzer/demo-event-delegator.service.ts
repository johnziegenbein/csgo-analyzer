import { Injectable } from '@angular/core';
import { DemoData } from './datastructures/demo-data';
import {MapEventAnalyzer} from './eventAnalyzers/map-event-analyzer.service';
import {TeamEventAnalyzer} from './eventAnalyzers/team-event-analyzer.service';
import {RoundEventAnalyzer} from './eventAnalyzers/round-event-analyzer.service';

@Injectable({
  providedIn: 'root'
})
export class DemoEventDelegator {

  constructor(private mapEventAnalyzer: MapEventAnalyzer,
              private teamEventAnalyzer: TeamEventAnalyzer,
              private  roundEventAnalyzer: RoundEventAnalyzer) { }

  analyze(parsedDemo: string): DemoData {
    let demoData: DemoData = new DemoData();

    for (const demoEvent of parsedDemo.split(/[\r\n]+/)) {
      const eventList = demoEvent.split(',');
      switch (eventList[0]) {
        case DemoEvent.MAP:
          this.mapEventAnalyzer.addEventAnalysis(demoData, eventList);
          break;
        case DemoEvent.TEAM:
          this.teamEventAnalyzer.addEventAnalysis(demoData, eventList);
          break;
        case DemoEvent.KILL:
          console.log('Kill');
          break;
        case DemoEvent.ROUND_END:
          this.roundEventAnalyzer.addEventAnalysis(demoData, eventList);
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
