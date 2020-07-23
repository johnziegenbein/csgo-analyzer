import {Component, OnInit} from '@angular/core';
import {DemoData} from '../datastructures/demo-data';
import {DemoDataService} from '../demo-data.service';

@Component({
  selector: 'app-demo-results',
  templateUrl: './demo-results.component.html',
  styleUrls: ['./demo-results.component.scss']
})
export class DemoResultsComponent implements OnInit {

  demoData: DemoData;

  constructor(demoDataService: DemoDataService) {
    this.demoData = demoDataService.demoData;
  }

  ngOnInit() {
  }

}
