import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhotelOrdersComponent } from './allhotel-orders.component';

describe('AllhotelOrdersComponent', () => {
  let component: AllhotelOrdersComponent;
  let fixture: ComponentFixture<AllhotelOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllhotelOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllhotelOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
