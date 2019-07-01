import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-performance',
  templateUrl: './recent-performance.component.html',
  styleUrls: ['./recent-performance.component.scss']
})
export class RecentPerformanceComponent implements OnInit {

  showRecentPerformance = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShowRecentPerformance() {
    this.showRecentPerformance = !this.showRecentPerformance;
  }

}
