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
  stats;
  profile;
  userId: '';

  constructor(private faceitService: FaceitService) {
  }


  sendForm(newUsername: string) {
    this.showStats = false;
    this.setUsername(newUsername);
    this.getUserIdAndStats();

  }

  setUsername(newUsername: string) {
    this.username = newUsername;
  }

  getUserIdAndStats() {
    this.faceitService.getFaceitId(this.username).subscribe(
      (res) => {
        const list = res;
        console.log(list);
        console.log('Faceit id: ' + list.player_id);
        this.profile = list;
        this.userId = list.player_id.toString();

        // get stats is chained inside the subscribe to assure
        // userId is set as observables are asynchronous
        // and fixing it the other way with promises is
        // the most annoying thing ive ever seen
        this.getStats();
      },
      error => {
        alert('Could not aquire stats from faceit. Please provide correct username');
        console.error('could not retrieve stats: ');
        console.error(error);
      });
  }

  getStats(): void {
    this.faceitService.getFaceitStats(this.userId).subscribe(
      (res) => {
        console.log('----result FaceitStats----');
        console.log(res);
        this.stats = res;
        this.showStats = true;
      },
      error => {
        console.error('could not retrieve stats: ');
        console.error(error);
        alert('Could not aquire stats from faceit. Please provide correct username');
        this.username = '';
        this.showStats = false;
      });
  }


  ngOnInit() {
  }
}
