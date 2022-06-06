import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerintComponent } from './customerint.component';

describe('CustomerintComponent', () => {
  let component: CustomerintComponent;
  let fixture: ComponentFixture<CustomerintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
