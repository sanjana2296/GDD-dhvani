import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabilateComponent } from './rehabilate.component';

describe('RehabilateComponent', () => {
  let component: RehabilateComponent;
  let fixture: ComponentFixture<RehabilateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabilateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabilateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
