import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorVisitComponent } from './doctor-visit.component';

describe('DoctorVisitComponent', () => {
  let component: DoctorVisitComponent;
  let fixture: ComponentFixture<DoctorVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
