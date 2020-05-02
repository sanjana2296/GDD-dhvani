import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicknotesComponent } from './quicknotes.component';

describe('QuicknotesComponent', () => {
  let component: QuicknotesComponent;
  let fixture: ComponentFixture<QuicknotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicknotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicknotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
