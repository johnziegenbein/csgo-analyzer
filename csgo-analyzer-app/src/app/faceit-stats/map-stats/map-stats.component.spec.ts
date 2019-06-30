import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStatsComponent } from './map-stats.component';

describe('MapStatsComponent', () => {
  let component: MapStatsComponent;
  let fixture: ComponentFixture<MapStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
