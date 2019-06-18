import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faceit-stats',
  templateUrl: './faceit-stats.component.html',
  styleUrls: ['./faceit-stats.component.scss']
})
export class FaceitStatsComponent implements OnInit {

  username = '';

  setUsername(newUsername: string) {
    this.username = newUsername;
  }

  constructor() { }

  ngOnInit() {
  }

}
