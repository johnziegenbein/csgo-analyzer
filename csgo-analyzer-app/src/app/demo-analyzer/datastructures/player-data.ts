import {KillData} from './kill-data';

export class PlayerData {
  name = '';
  kills: KillData[] = [];
  deaths = 0;
  assists = 0;

  constructor(name: string) {
    this.name = name;
  }
}
