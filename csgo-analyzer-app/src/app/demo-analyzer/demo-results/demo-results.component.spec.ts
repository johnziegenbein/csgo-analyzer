import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoResultsComponent } from './demo-results.component';

describe('DemoResultsComponent', () => {
  let component: DemoResultsComponent;
  let fixture: ComponentFixture<DemoResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
