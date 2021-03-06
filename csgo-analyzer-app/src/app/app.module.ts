import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FaceitService} from './faceit-stats/faceit.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './faceit-stats/auth-interceptor';
import { LifetimeStatsComponent } from './faceit-stats/lifetime-stats/lifetime-stats.component';
import { MapStatsComponent } from './faceit-stats/map-stats/map-stats.component';
import { RecentPerformanceComponent } from './faceit-stats/recent-performance/recent-performance.component';
import { DemoResultsComponent } from './demo-analyzer/demo-results/demo-results.component';
import { MatchResultsComponent } from './demo-analyzer/demo-results/match-results/match-results.component';
import { TeamResultsOverviewComponent } from './demo-analyzer/demo-results/match-results/team-results-overview/team-results-overview.component';
import { TeamOverviewComponent } from './demo-analyzer/demo-results/match-results/team-results-overview/team-overview/team-overview.component';
import { PlayerOverviewComponent } from './demo-analyzer/demo-results/match-results/team-results-overview/team-overview/player-overview/player-overview.component';
import { TeamResultsComponent } from './demo-analyzer/demo-results/team-results/team-results.component';
import { PlayerResultsComponent } from './demo-analyzer/demo-results/player-results/player-results.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavigationComponent,
    HomeComponent,
    LifetimeStatsComponent,
    MapStatsComponent,
    RecentPerformanceComponent,
    DemoResultsComponent,
    MatchResultsComponent,
    TeamResultsOverviewComponent,
    TeamOverviewComponent,
    PlayerOverviewComponent,
    TeamResultsComponent,
    PlayerResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FaceitService,
    {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
