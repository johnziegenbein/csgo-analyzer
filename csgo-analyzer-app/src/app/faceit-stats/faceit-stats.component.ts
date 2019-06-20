import { Component, OnInit } from '@angular/core';
import { FaceitService} from '../faceit.service';
import {Observable} from 'rxjs';
import {FaceitStatsList} from './faceit-stats-list';

@Component({
  selector: 'app-faceit-stats',
  templateUrl: './faceit-stats.component.html',
  styleUrls: ['./faceit-stats.component.scss']
})
export class FaceitStatsComponent implements OnInit {

  username = '';
  showStats = false;
  stats = [];

  constructor(private faceitService: FaceitService) { }

  setUsername(newUsername: string) {
    this.username = newUsername;
    if (this.username === '') {
      this.showStats = false;
    } else {
      this.showStats = true;
      this.getStats();
    }
  }

  getStats(): void {
    this.faceitService.getFaceitStats(this.username).subscribe(
      (data: FaceitStatsList) => {
        console.log('stats: ' + data);
        this.stats = data;
      },
      error => {
        console.error('could not retrieve stats: ');
        console.error(error);
      });

  }

  ngOnInit() {
  }

}
