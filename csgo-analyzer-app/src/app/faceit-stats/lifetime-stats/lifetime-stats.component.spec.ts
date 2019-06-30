import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimeStatsComponent } from './lifetime-stats.component';

describe('LifetimeStatsComponent', () => {
  let component: LifetimeStatsComponent;
  let fixture: ComponentFixture<LifetimeStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetimeStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetimeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
