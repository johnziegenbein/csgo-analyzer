import {MatchData} from './match-data';
import {TeamData} from './team-data';

export class DemoData {
  matchData: MatchData = new MatchData();
  teams: Map<string, TeamData> = new Map<string, TeamData>();
}
