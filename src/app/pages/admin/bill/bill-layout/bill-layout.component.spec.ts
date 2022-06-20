import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillLayoutComponent } from './bill-layout.component';

describe('BillLayoutComponent', () => {
  let component: BillLayoutComponent;
  let fixture: ComponentFixture<BillLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
