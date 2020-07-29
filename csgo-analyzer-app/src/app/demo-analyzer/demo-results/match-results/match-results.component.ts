import { Component, OnInit } from '@angular/core';
import {DemoData} from '../../datastructures/demo-data';
import {DemoDataService} from '../../demo-data.service';
import {Map} from '../../datastructures/match-data';


@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.scss']
})
export class MatchResultsComponent implements OnInit {

  showMatchResults = true;
  demoData: DemoData;

  constructor(demoDataService: DemoDataService) {
    this.demoData = demoDataService.demoData;
  }

  ngOnInit() {
  }

  toggleShowMatchResults() {
    this.showMatchResults = !this.showMatchResults;
  }

  getImageUrl(map: string) {
    switch (map) {
      case Map.INFERNO:
        return 'url(\'https://www.hltv.org/img/static/maps/inferno.png\')';
      case Map.CACHE:
        return 'url(\'https://www.hltv.org/img/static/maps/cache.png\')';
      case Map.MIRAGE:
        return 'url(\'https://www.hltv.org/img/static/maps/mirage.png\')';
      case Map.DUST2:
        return 'url(\'https://www.hltv.org/img/static/maps/dust2.png\')';
      case Map.NUKE:
        return 'url(\'https://www.hltv.org/img/static/maps/nuke.png\')';
      case Map.VERTIGO:
        return 'url(\'https://www.hltv.org/img/static/maps/vertigo.png\')';
      case Map.TRAIN:
        return 'url(\'https://www.hltv.org/img/static/maps/train.png\')';
      case Map.OVERPASS:
        return 'url(\'https://www.hltv.org/img/static/maps/overpass.png\')';
      case Map.COBBLESTONE:
        return 'url(\'https://www.hltv.org/img/static/maps/cobblestone.png\')';
      default:
        return '';
    }
  }
}
