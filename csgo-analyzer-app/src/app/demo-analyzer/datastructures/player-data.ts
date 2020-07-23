import {KillData} from './kill-data';
import {DeathData} from './death-data';

export class PlayerData {
  name = '';
  kills: KillData[] = [];
  deaths: DeathData[] = [];
  assists = 0;

  constructor(name: string) {
    this.name = name;
  }
}
