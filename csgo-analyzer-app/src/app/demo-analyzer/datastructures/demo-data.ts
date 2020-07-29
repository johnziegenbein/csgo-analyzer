import {MatchData} from './match-data';
import {TeamData} from './team-data';
import {PlayerData} from './player-data';

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

  getPlayerByName(playerName: string): PlayerData {
    if (this.teams[0].players.has(playerName)) {
      return this.teams[0].players.get(playerName);
    } else if (this.teams[1].players.has(playerName)) {
      return this.teams[1].players.get(playerName);
    } else { throw TypeError('Player not found in any team'); }
  }

  isOnSameTeam(player1: string, player2: string) {
    return (this.teams[0].players.has(player1) && this.teams[0].players.has(player2))
      || (this.teams[1].players.has(player1) && this.teams[1].players.has(player2));
  }

  getTeamByName(teamName: string): TeamData {
    for (const team of this.teams) {
      if (team.name === teamName) {
        return team;
      }
    }
    throw TypeError('Team: ' + teamName + ' not found');
  }
}
