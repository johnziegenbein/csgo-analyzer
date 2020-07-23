import { Injectable } from '@angular/core';
import {EventParser} from './event-parser.service';
import {DemoData} from '../datastructures/demo-data';

const WINNING_TEAM_SIDE_INDEX = 1;

@Injectable({
  providedIn: 'root'
})
export class RoundEventParser implements EventParser {
  constructor() { }

  parseEventIntoDemoData(demoData: DemoData, demoList: string[]) {
    demoData.getTeamBySide(demoList[WINNING_TEAM_SIDE_INDEX]).wins ++;
    demoData.matchData.rounds ++;
  }
}
