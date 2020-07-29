import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsOverviewComponent } from './team-results-overview.component';

describe('TeamResultsOverviewComponent', () => {
  let component: TeamResultsOverviewComponent;
  let fixture: ComponentFixture<TeamResultsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamResultsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamResultsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
