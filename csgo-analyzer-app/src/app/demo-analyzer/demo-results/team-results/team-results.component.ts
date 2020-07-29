import { Component, OnInit } from '@angular/core';
import {TeamData} from '../../datastructures/team-data';
import {ActivatedRoute} from '@angular/router';
import {DemoDataService} from '../../demo-data.service';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.scss']
})
export class TeamResultsComponent implements OnInit {

  teamData: TeamData;

  constructor(private demoDataService: DemoDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamData = this.demoDataService.demoData.getTeamByName(params.get('name'));
    });
  }

}
