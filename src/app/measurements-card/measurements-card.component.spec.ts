import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsCardComponent } from './measurements-card.component';

describe('MeasurementsCardComponent', () => {
  let component: MeasurementsCardComponent;
  let fixture: ComponentFixture<MeasurementsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
