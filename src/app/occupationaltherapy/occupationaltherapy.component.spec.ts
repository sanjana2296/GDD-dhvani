import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationaltherapyComponent } from './occupationaltherapy.component';

describe('OccupationaltherapyComponent', () => {
  let component: OccupationaltherapyComponent;
  let fixture: ComponentFixture<OccupationaltherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationaltherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationaltherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
