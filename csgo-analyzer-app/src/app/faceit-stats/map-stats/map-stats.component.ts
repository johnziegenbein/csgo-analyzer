import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-stats',
  templateUrl: './map-stats.component.html',
  styleUrls: ['./map-stats.component.scss']
})
export class MapStatsComponent implements OnInit {

  @Input() stats;
  showMaps = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShowMaps() {
    this.showMaps = !this.showMaps;
  }
}
