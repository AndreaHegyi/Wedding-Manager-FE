import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorintComponent } from './vendorint.component';

describe('VendorintComponent', () => {
  let component: VendorintComponent;
  let fixture: ComponentFixture<VendorintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
