import { Injectable } from '@angular/core';
import {EventAnalyzer} from './event-analyzer.service';
import {DemoData} from '../datastructures/demo-data';

const WINNING_TEAM_SIDE_INDEX = 1;

@Injectable({
  providedIn: 'root'
})
export class RoundEventAnalyzer implements EventAnalyzer {
  constructor() { }

  addEventAnalysis(demoData: DemoData, demoList: string[]) {
    demoData.matchData.rounds ++;

    demoData.getTeamBySide(demoList[WINNING_TEAM_SIDE_INDEX]).wins ++;
  }
}
