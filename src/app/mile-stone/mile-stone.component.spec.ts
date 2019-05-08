import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileStoneComponent } from './mile-stone.component';

describe('MileStoneComponent', () => {
  let component: MileStoneComponent;
  let fixture: ComponentFixture<MileStoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileStoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
