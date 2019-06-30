import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifetime-stats',
  templateUrl: './lifetime-stats.component.html',
  styleUrls: ['./lifetime-stats.component.scss']
})
export class LifetimeStatsComponent implements OnInit {

  @Input() stats;
  @Input() profile;

  constructor() {
  }

  ngOnInit() {
  }
}

