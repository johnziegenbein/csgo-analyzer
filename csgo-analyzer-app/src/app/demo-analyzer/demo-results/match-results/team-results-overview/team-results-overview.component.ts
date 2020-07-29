import { Component, OnInit } from '@angular/core';
import {DemoData} from '../../../datastructures/demo-data';
import {DemoDataService} from '../../../demo-data.service';

@Component({
  selector: 'app-team-results-overview',
  templateUrl: './team-results-overview.component.html',
  styleUrls: ['./team-results-overview.component.scss']
})
export class TeamResultsOverviewComponent implements OnInit {

  showTeamOverviewResults = true;
  demoData: DemoData;

  constructor(demoDataService: DemoDataService) {
    this.demoData = demoDataService.demoData;
  }

  ngOnInit() {
  }

  toggleShowTeamOverviewResults() {
    this.showTeamOverviewResults = !this.showTeamOverviewResults;
  }

}
