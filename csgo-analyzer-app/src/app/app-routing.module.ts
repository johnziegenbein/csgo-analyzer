import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaceitStatsComponent} from './faceit-stats/faceit-stats.component';
import {DemoAnalyzerComponent} from './demo-analyzer/demo-analyzer.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'faceit-stats', component: FaceitStatsComponent},
  { path: 'demo-analyzer', component: DemoAnalyzerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FaceitStatsComponent, DemoAnalyzerComponent]
