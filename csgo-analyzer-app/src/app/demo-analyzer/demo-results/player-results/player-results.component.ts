import { Component, OnInit } from '@angular/core';
import {DemoDataService} from '../../demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {PlayerData} from '../../datastructures/player-data';

@Component({
  selector: 'app-player-results',
  templateUrl: './player-results.component.html',
  styleUrls: ['./player-results.component.scss']
})
export class PlayerResultsComponent implements OnInit {

  playerData: PlayerData;

  constructor(private demoDataService: DemoDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playerData = this.demoDataService.demoData.getPlayerByName(params.get('name'));
    });
  }

}
