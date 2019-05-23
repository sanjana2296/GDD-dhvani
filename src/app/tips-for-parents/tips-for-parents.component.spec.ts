import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsForParentsComponent } from './tips-for-parents.component';

describe('TipsForParentsComponent', () => {
  let component: TipsForParentsComponent;
  let fixture: ComponentFixture<TipsForParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsForParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsForParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
