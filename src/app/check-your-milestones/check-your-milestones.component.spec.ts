import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckYourMilestonesComponent } from './check-your-milestones.component';

describe('CheckYourMilestonesComponent', () => {
  let component: CheckYourMilestonesComponent;
  let fixture: ComponentFixture<CheckYourMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckYourMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckYourMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
