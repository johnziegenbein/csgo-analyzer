import {Component, Input, OnInit} from '@angular/core';
import {TeamData} from '../../../../datastructures/team-data';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {

  @Input() team: TeamData;

  keyArray;

  constructor() {
  }

  ngOnInit() {
    this.keyArray = Array.from(this.team.players.keys());
  }

}
