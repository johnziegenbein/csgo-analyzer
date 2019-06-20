import {Component, OnInit} from '@angular/core';
import {FaceitService} from './faceit.service';

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

  getStatsForUserName(newUsername: string) {
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
      (res) => {
        console.log(res);
        this.stats = Array.of(res);
      },
      error => {
        console.error('could not retrieve stats: ');
        console.error(error);
      });

  }

  ngOnInit() {
  }
}
