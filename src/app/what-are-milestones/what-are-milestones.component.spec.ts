import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreMilestonesComponent } from './what-are-milestones.component';

describe('WhatAreMilestonesComponent', () => {
  let component: WhatAreMilestonesComponent;
  let fixture: ComponentFixture<WhatAreMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatAreMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAreMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
