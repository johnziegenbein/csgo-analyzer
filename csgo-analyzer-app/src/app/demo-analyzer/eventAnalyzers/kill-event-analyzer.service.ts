import { Injectable } from '@angular/core';
import {EventAnalyzer} from './event-analyzer.service';
import {DemoData} from '../datastructures/demo-data';
import {KillData} from '../datastructures/kill-data';

const ROUND_INDEX = 1;
const KILLER_INDEX = 2;
const VICTIM_INDEX = 3;
const ASSIST_INDEX = 4;
const KILLER_TEAM_INDEX = 5;
const VICTIM_TEAM_INDEX = 6;
const WEAPON_INDEX = 7;
const HEADSHOT_INDEX = 8;
const ROUND_TIME_INDEX = 9;
const KILLER_POSITION_INDEX = 10;
const KILLER_YAW_INDEX = 11;
const VICTIM_POSITION_INDEX = 12;
const VICTIM_YAW_INDEX = 13;

@Injectable({
  providedIn: 'root'
})

export class KillEventAnalyzer implements EventAnalyzer {
  constructor() { }

  addEventAnalysis(demoData: DemoData, eventList: string[]) {
    const killerTeam = eventList[KILLER_TEAM_INDEX];
    const killer = eventList[KILLER_INDEX];

    demoData.getTeamBySide(killerTeam)
      .players.get(killer)
      .kills.push(this.mapKillData(eventList));
  }

  private mapKillData(eventList: string[]) {
    const killData: KillData = {
      headshot: eventList[HEADSHOT_INDEX] === 'Yes',
      position: eventList[KILLER_POSITION_INDEX],
      round: parseInt(eventList[ROUND_INDEX], 10),
      roundTime: eventList[ROUND_TIME_INDEX],
      victim: eventList[VICTIM_INDEX],
      victimPosition: eventList[VICTIM_POSITION_INDEX],
      victimYaw: eventList[VICTIM_YAW_INDEX],
      weapon: eventList[WEAPON_INDEX],
      yaw: eventList[KILLER_YAW_INDEX]
    };
    return killData;
  }
}
