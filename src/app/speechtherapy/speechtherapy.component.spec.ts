import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechtherapyComponent } from './speechtherapy.component';

describe('SpeechtherapyComponent', () => {
  let component: SpeechtherapyComponent;
  let fixture: ComponentFixture<SpeechtherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechtherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechtherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
