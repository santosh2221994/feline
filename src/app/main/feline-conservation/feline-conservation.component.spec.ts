import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelineConservationComponent } from './feline-conservation.component';

describe('FelineConservationComponent', () => {
  let component: FelineConservationComponent;
  let fixture: ComponentFixture<FelineConservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelineConservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelineConservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
