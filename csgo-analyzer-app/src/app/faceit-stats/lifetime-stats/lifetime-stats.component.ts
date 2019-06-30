import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-lifetime-stats',
  templateUrl: './lifetime-stats.component.html',
  styleUrls: ['./lifetime-stats.component.scss']
})
export class LifetimeStatsComponent implements OnInit, OnChanges {

  @Input() stats;
  @Input() profile;
  showLifetimeStats = true;
  private avgKills: number;
  private avgDeaths: number;
  private avgAssists: number;
  private avgTripleKill: number;
  private avgQuadKill: number;
  private avgAce: number;
  private kills: number;
  private assists: number;
  private deaths: number;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (this.stats != undefined ) {
      this.calculateAverageStatsFromMapStats();
    }
  }

  calculateAverageStatsFromMapStats() {
    this.kills = 0;
    this.assists = 0;
    this.deaths = 0;
    let tripleKill = 0;
    let quadKill = 0;
    let ace = 0;
    for (let map of this.stats['segments']) {
      this.kills += Number(map['stats']['Kills']);
      this.deaths += Number(map['stats']['Deaths']);
      this.assists += Number(map['stats']['Assists']);
      tripleKill += Number(map['stats']['Triple Kills']);
      quadKill += Number(map['stats']['Quadro Kills']);
      ace += Number(map['stats']['Penta Kills']);
    }
    this.avgKills = this.kills / this.stats['lifetime']['Matches'];
    this.avgDeaths = this.deaths / this.stats['lifetime']['Matches'];
    this.avgAssists = this.assists / this.stats['lifetime']['Matches'];
    this.avgTripleKill = tripleKill / this.stats['lifetime']['Matches'];
    this.avgQuadKill = quadKill / this.stats['lifetime']['Matches'];
    this.avgAce = ace / this.stats['lifetime']['Matches'];
  }

  toggleShowLifetimeStats() {
    this.showLifetimeStats = !this.showLifetimeStats;
  }
}

