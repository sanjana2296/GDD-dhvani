import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneForNormalChildComponent } from './milestone-for-normal-child.component';

describe('MilestoneForNormalChildComponent', () => {
  let component: MilestoneForNormalChildComponent;
  let fixture: ComponentFixture<MilestoneForNormalChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestoneForNormalChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneForNormalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
