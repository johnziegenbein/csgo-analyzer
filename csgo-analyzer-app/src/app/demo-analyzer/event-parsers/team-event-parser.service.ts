import {Injectable} from '@angular/core';
import {EventParser} from './event-parser.service';
import {DemoData} from '../datastructures/demo-data';
import {CS_SIDE, TeamData} from '../datastructures/team-data';
import {PlayerData} from '../datastructures/player-data';

const TEAM_NAME_INDEX = 1;
const PLAYER_NAMES_INDEX = [2, 3, 4, 5, 6];
const TEAM_STARTING_SIDE_INDEX = 7;

@Injectable({
  providedIn: 'root'
})

export class TeamEventParser implements EventParser {
  constructor() {
  }

  parseEventIntoDemoData(demoData: DemoData, eventList: string[]) {
    const teamData: TeamData = {
      wins: 0,
      name: eventList[TEAM_NAME_INDEX],
      players: this.createListOfPlayersFromEvent(eventList),
      startAs: eventList[TEAM_STARTING_SIDE_INDEX] === CS_SIDE.CT ?
        CS_SIDE.CT : CS_SIDE.T
    };
    demoData.teams.push(teamData);
  }

  private createListOfPlayersFromEvent(eventList: string[]) {
    const playerList = new Map<string, PlayerData>();
    for (const playerNameIndex of PLAYER_NAMES_INDEX) {
      const playerName = eventList[playerNameIndex];
      playerList.set(playerName, new PlayerData(playerName));
    }
    return playerList;
  }
}
