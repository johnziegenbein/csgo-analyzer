import {Component, OnInit} from '@angular/core';
import {FaceitService} from './faceit.service';
import {DomSanitizer} from '@angular/platform-browser';
import {sync} from 'glob';

@Component({
  selector: 'app-faceit-stats',
  templateUrl: './faceit-stats.component.html',
  styleUrls: ['./faceit-stats.component.scss']
})
export class FaceitStatsComponent implements OnInit {

  username = '';
  showStats = false;
  stats = [];
  userId: '';

  constructor(private faceitService: FaceitService, private sanitizer: DomSanitizer) {
  }


  sendForm(newUsername: string) {
    this.setUsername(newUsername);
    this.getUserIdAndStats();

  }

  setUsername(newUsername: string) {
    this.username = newUsername;
    this.showStats = this.username !== '';
  }

  getUserIdAndStats() {
    this.faceitService.getFaceitId(this.username).subscribe(
      (res) => {
        const list = Array.of(res);
        console.log('Faceit id: ' + list[0].player_id);
        this.userId = list[0].player_id.toString();

        // get stats is chained inside the subscribe to assure
        // userId is set as observables are asynchronous
        // and fixing it the other way with promises is
        // the most annoying thing ive ever seen
        this.getStats();
      },
      error => {
        console.error('could not retrieve stats: ');
        console.error(error);
      });
  }

  getStats(): void {
    this.faceitService.getFaceitStats(this.userId).subscribe(
      (res) => {
        console.log('----result FaceitStats----');
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
