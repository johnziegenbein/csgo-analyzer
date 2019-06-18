import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceitStatsComponent } from './faceit-stats.component';

describe('FaceitStatsComponent', () => {
  let component: FaceitStatsComponent;
  let fixture: ComponentFixture<FaceitStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceitStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceitStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
