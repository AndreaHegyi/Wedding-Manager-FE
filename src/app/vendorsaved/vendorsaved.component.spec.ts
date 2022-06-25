import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsavedComponent } from './vendorsaved.component';

describe('VendorsavedComponent', () => {
  let component: VendorsavedComponent;
  let fixture: ComponentFixture<VendorsavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
