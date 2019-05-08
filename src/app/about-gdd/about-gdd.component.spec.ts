import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGddComponent } from './about-gdd.component';

describe('AboutGddComponent', () => {
  let component: AboutGddComponent;
  let fixture: ComponentFixture<AboutGddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutGddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
