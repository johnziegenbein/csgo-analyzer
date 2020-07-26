import { Component, OnInit } from '@angular/core';
import {DemoData} from '../../datastructures/demo-data';
import {DemoDataService} from '../../demo-data.service';

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
}
