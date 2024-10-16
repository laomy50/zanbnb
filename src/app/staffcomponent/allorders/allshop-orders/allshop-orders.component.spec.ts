import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshopOrdersComponent } from './allshop-orders.component';

describe('AllshopOrdersComponent', () => {
  let component: AllshopOrdersComponent;
  let fixture: ComponentFixture<AllshopOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllshopOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllshopOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
