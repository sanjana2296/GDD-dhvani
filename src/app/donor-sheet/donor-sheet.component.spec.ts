import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorSheetComponent } from './donor-sheet.component';

describe('DonorSheetComponent', () => {
  let component: DonorSheetComponent;
  let fixture: ComponentFixture<DonorSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
