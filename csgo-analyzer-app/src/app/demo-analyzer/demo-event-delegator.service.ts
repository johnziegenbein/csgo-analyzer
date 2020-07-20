import { Injectable } from '@angular/core';
import { DemoData } from './datastructures/demo-data';
import {MapEventAnalyzer} from './eventAnalyzers/map-event-analyzer.service';
import {TeamEventAnalyzer} from "./eventAnalyzers/team-event-analyzer.service";

@Injectable({
  providedIn: 'root'
})
export class DemoEventDelegator {

  constructor(private mapEventAnalyzer: MapEventAnalyzer,
              private teamEventAnalyzer: TeamEventAnalyzer) { }

  analyze(parsedDemo: string): DemoData {
    let demoData: DemoData = new DemoData();

    for (const demoEvent of parsedDemo.split(/[\r\n]+/)) {
      switch (demoEvent.split(',')[0]) {
        case DemoEvent.MAP:
          this.mapEventAnalyzer.addEventAnalysis(demoData, demoEvent);
          break;
        case DemoEvent.TEAM:
          this.teamEventAnalyzer.addEventAnalysis(demoData, demoEvent);
          break;
        case DemoEvent.KILL:
          console.log('Kill');
          break;
        case DemoEvent.ROUND_END:
          console.log('Round end');
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
