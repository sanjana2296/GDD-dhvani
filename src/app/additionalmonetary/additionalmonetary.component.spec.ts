import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalmonetaryComponent } from './additionalmonetary.component';

describe('AdditionalmonetaryComponent', () => {
  let component: AdditionalmonetaryComponent;
  let fixture: ComponentFixture<AdditionalmonetaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalmonetaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalmonetaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
