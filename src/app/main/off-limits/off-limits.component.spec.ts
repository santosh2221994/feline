import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffLimitsComponent } from './off-limits.component';

describe('OffLimitsComponent', () => {
  let component: OffLimitsComponent;
  let fixture: ComponentFixture<OffLimitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffLimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
