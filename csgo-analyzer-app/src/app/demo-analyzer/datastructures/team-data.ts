import {PlayerData} from './player-data';

export class TeamData {
  name = '';
  players = new Map<string, PlayerData>();
  startAs: CS_SIDE;
}

export enum CS_SIDE {
  CT = 'CT',
  T = 'T'
}
