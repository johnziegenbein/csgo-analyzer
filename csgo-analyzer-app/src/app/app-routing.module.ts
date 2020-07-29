import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaceitStatsComponent} from './faceit-stats/faceit-stats.component';
import {DemoAnalyzerComponent} from './demo-analyzer/demo-analyzer.component';
import {HomeComponent} from './home/home.component';
import {DemoResultsComponent} from './demo-analyzer/demo-results/demo-results.component';
import {TeamResultsComponent} from './demo-analyzer/demo-results/team-results/team-results.component';
import {PlayerResultsComponent} from './demo-analyzer/demo-results/player-results/player-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'faceit/stats', component: FaceitStatsComponent},
  { path: 'demo/analyzer', component: DemoAnalyzerComponent},
  { path: 'demo/result', component: DemoResultsComponent},
  { path: 'demo/result/team/:name', component: TeamResultsComponent},
  { path: 'demo/result/player/:name', component: PlayerResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FaceitStatsComponent, DemoAnalyzerComponent];
