import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinateYourChildComponent } from './vaccinate-your-child.component';

describe('VaccinateYourChildComponent', () => {
  let component: VaccinateYourChildComponent;
  let fixture: ComponentFixture<VaccinateYourChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinateYourChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinateYourChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
