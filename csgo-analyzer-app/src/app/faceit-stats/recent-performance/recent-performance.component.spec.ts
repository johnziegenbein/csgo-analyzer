import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPerformanceComponent } from './recent-performance.component';

describe('RecentPerformanceComponent', () => {
  let component: RecentPerformanceComponent;
  let fixture: ComponentFixture<RecentPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
