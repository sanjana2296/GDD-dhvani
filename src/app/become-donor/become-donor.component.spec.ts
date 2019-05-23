import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeDonorComponent } from './become-donor.component';

describe('BecomeDonorComponent', () => {
  let component: BecomeDonorComponent;
  let fixture: ComponentFixture<BecomeDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
