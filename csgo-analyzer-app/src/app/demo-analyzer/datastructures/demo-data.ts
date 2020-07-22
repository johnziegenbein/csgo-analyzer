import {MatchData} from './match-data';
import {TeamData} from './team-data';

const SIDE_SWITCH_ROUND = 15;

export class DemoData {
  matchData: MatchData = new MatchData();
  teams: TeamData[] = [];

  /**
   * todo: Fix overtime
   * todo: Fix player dc
   */
  getTeamBySide(winningTeamSide: string): TeamData {
    if (this.matchData.rounds < SIDE_SWITCH_ROUND) {
      return this.teams.filter(team =>
        team.startAs === winningTeamSide)[0];
    }
    return this.teams.filter(team =>
      team.startAs !== winningTeamSide)[0];
  }
}
