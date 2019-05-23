import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsToKnowComponent } from './things-to-know.component';

describe('ThingsToKnowComponent', () => {
  let component: ThingsToKnowComponent;
  let fixture: ComponentFixture<ThingsToKnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsToKnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsToKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
