import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnalyzerComponent } from './demo-analyzer.component';

describe('DemoAnalyzerComponent', () => {
  let component: DemoAnalyzerComponent;
  let fixture: ComponentFixture<DemoAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
