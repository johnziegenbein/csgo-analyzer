import {Injectable} from '@angular/core';
import {EventAnalyzer} from './event-analyzer.service';
import {DemoData} from '../datastructures/demo-data';
import {CS_SIDE, TeamData} from '../datastructures/team-data';
import {PlayerData} from '../datastructures/player-data';


const TEAM_NAME = 1;
const TEAM_STARTING_SIDE = 7;

@Injectable({
  providedIn: 'root'
})


export class TeamEventAnalyzer implements EventAnalyzer {
  constructor() {
  }

  addEventAnalysis(demoData: DemoData, demoEvent: string) {
    const eventList = demoEvent.split(',');
    console.log(eventList);

    const teamData: TeamData = {
      name: eventList[TEAM_NAME],
      players: new Map<string, PlayerData>(),
      startAs: eventList[TEAM_STARTING_SIDE] == CS_SIDE.CT ? CS_SIDE.CT : CS_SIDE.T
    };
    demoData.teams.set(teamData.name, teamData);
  }
}
