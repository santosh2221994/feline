import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighStakesComponent } from './high-stakes.component';

describe('HighStakesComponent', () => {
  let component: HighStakesComponent;
  let fixture: ComponentFixture<HighStakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighStakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighStakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
