import {PlayerData} from './player-data';

export class TeamData {
  name = '';
  players = new Map<string, PlayerData>();
  startAs: CS_SIDE;
  wins = 0;
}

export enum CS_SIDE {
  CT = 'CT',
  T = 'T'
}
