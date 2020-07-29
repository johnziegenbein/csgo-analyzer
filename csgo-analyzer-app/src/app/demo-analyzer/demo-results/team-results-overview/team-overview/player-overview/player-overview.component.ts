import {Component, Input, OnInit} from '@angular/core';
import {PlayerData} from '../../../../datastructures/player-data';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent implements OnInit {

  @Input() player: PlayerData;

  constructor() { }

  ngOnInit() {
  }

}
