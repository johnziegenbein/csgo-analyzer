export class PlayerStats {

  matches: number;
  wins: number;

  kills: number;
  deaths: number;
  assists: number;

  sumOfKRRatio: number;
  sumOfKDRatio: number;
  sumOfHeadshotPercent: number;

  tripleKills: number;
  quadKills: number;
  aces: number;

  constructor() {
    this.matches = 0;
    this.wins = 0;

    this.kills = 0;
    this.deaths = 0;
    this.assists = 0;

    this.sumOfKRRatio = 0;
    this.sumOfKDRatio = 0;
    this.sumOfHeadshotPercent = 0;

    this.tripleKills = 0;
    this.quadKills = 0;
    this.aces = 0;
  }
}
