import { Injectable } from '@angular/core';
import {EventParser} from './event-parser.service';
import {DemoData} from '../datastructures/demo-data';
import {KillData} from '../datastructures/kill-data';
import {DeathData} from "../datastructures/death-data";

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

export class KillEventParser implements EventParser {
  constructor() { }

  parseEventIntoDemoData(demoData: DemoData, eventList: string[]) {

    demoData.getTeamBySide(eventList[KILLER_TEAM_INDEX])
      .players.get(eventList[KILLER_INDEX])
      .kills.push(this.mapKillData(eventList));

    demoData.getTeamBySide(eventList[VICTIM_TEAM_INDEX])
      .players.get(eventList[VICTIM_INDEX])
      .deaths.push(this.mapDeathData(eventList));
  }

  private mapKillData(eventList: string[]) {
    const killData: KillData = {
      headshot: this.isHeadshot(eventList),
      position: eventList[KILLER_POSITION_INDEX],
      round: this.parseRoundToNumber(eventList),
      roundTime: eventList[ROUND_TIME_INDEX],
      victim: eventList[VICTIM_INDEX],
      victimPosition: eventList[VICTIM_POSITION_INDEX],
      victimYaw: eventList[VICTIM_YAW_INDEX],
      weapon: eventList[WEAPON_INDEX],
      yaw: eventList[KILLER_YAW_INDEX]
    };
    return killData;
  }

  private mapDeathData(eventList: string[]) {
    const deathData: DeathData = {
      headshot: this.isHeadshot(eventList),
      position: eventList[VICTIM_POSITION_INDEX],
      round: this.parseRoundToNumber(eventList),
      roundTime: eventList[ROUND_TIME_INDEX],
      killer: eventList[KILLER_INDEX],
      killerPosition: eventList[KILLER_POSITION_INDEX],
      killerYaw: eventList[KILLER_YAW_INDEX],
      weapon: eventList[WEAPON_INDEX],
      yaw: eventList[VICTIM_YAW_INDEX]
    };
    return deathData;
  }

  private parseRoundToNumber(eventList: string[]) {
    return parseInt(eventList[ROUND_INDEX], 10);
  }

  private isHeadshot(eventList: string[]) {
    return eventList[HEADSHOT_INDEX] === 'Yes';
  }
}
