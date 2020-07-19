import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoEventDelegator {

  constructor() { }

  delegate(demoEvent: string) {
    switch (demoEvent.split(',')[0]) {
      case DemoEvent.MAP:
        console.log('map');
        break;
      case DemoEvent.TEAM:
        console.log('Team');
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
}

enum DemoEvent {
  MAP = 'Map',
  TEAM = 'Team',
  KILL = 'Kill',
  ROUND_END = 'round_end',
}
