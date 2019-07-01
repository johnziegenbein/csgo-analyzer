import {Component, OnInit} from '@angular/core';
import {FaceitService} from './faceit.service';
import {PlayerStats} from "./player-stats";

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
  recentPerformance = new PlayerStats();

  constructor(private faceitService: FaceitService) {
  }

  sendForm(newUsername: string) {
    this.showStats = false;
    this.setUsername(newUsername);
    this.recentPerformance = new PlayerStats();
    this.getUserIdAndStats();
  }

  setUsername(newUsername: string) {
    this.username = newUsername;
  }

  getUserIdAndStats() {
    this.faceitService.getFaceitId(this.username).subscribe(
      (res) => {
        console.log(res);
        console.log('Faceit id: ' + res.player_id);

        this.profile = res;
        if (this.profile.avatar == '') {
          // tslint:disable-next-line:max-line-length
          this.profile.avatar = 'data:image/jpeg;base64,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';
        }

        this.userId = res.player_id.toString();

        // get stats is chained inside the subscribe to assure
        // userId is set as observables are asynchronous
        // and fixing it the other way with promises is
        // the most annoying thing ive ever see
        this.getStats();
      },
      error => {
        alert('Could not aquire UserId from faceit. Please provide correct username');
        console.error('could not retrieve UserId: ');
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

        this.getRecentPerformanceStats();
      },
      error => {
        console.error('could not retrieve stats: ');
        console.error(error);
        alert('Could not aquire stats from faceit. Please provide correct username');
        this.username = '';
        this.showStats = false;
      });
  }


  getRecentPerformanceStats(): void {
    this.faceitService.getMapHistory(this.userId, 5).subscribe(
      (res) => {
        console.log('----result MapHistory----');
        console.log(res);
        
        for (let match of res['items']) {
          this.getMatchResults(match['match_id']);
        }

        console.log(this.recentPerformance.matches);
      },
      error => {
        console.error('could not retrieve performance stats: ');
        console.error(error);
        alert('Could not aquire performance stats from faceit.');
      });
  }

  getMatchResults(matchId: string): void {
    this.faceitService.getMatchResults(matchId).subscribe(
      (res) => {
        console.log('----result MatchResult----');

        console.log(res['rounds'][0]);
        let match = res['rounds'][0];
        let teamId = '';
        this.recentPerformance.matches ++;
        for(let team of match['teams']) {
          for (let player of team['players']) {
            if (player['player_id'] == this.userId) {
              teamId = team['team_id'];
              this.recentPerformance.kills += Number(player['player_stats']['Kills']);
              this.recentPerformance.deaths += Number(player['player_stats']['Deaths']);
              this.recentPerformance.assists += Number(player['player_stats']['Assists']);

              this.recentPerformance.sumOfKRRatio += Number(player['player_stats']['K/R Ratio']);
              this.recentPerformance.sumOfKDRatio += Number(player['player_stats']['K/D Ratio']);
              this.recentPerformance.sumOfHeadshotPercent += Number(player['player_stats']['Headshots %']);

              this.recentPerformance.tripleKills += Number(player['player_stats']['Triple Kills']);
              this.recentPerformance.quadKills += Number(player['player_stats']['Quadro Kills']);
              this.recentPerformance.aces += Number(player['player_stats']['Penta Kills']);
              
              if (player['player_stats']['Result'] == 1) {
                this.recentPerformance.wins ++;
              }
            }
          }
        }
      },
      error => {
        console.error('could not retrieve match stats: ');
        console.error(error);
        alert('Could not aquire match stats from faceit.');
      });
  }


  ngOnInit() {
  }
}
