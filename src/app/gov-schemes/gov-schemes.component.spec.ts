import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovSchemesComponent } from './gov-schemes.component';

describe('GovSchemesComponent', () => {
  let component: GovSchemesComponent;
  let fixture: ComponentFixture<GovSchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovSchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
