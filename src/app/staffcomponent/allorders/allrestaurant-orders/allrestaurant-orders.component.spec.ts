import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrestaurantOrdersComponent } from './allrestaurant-orders.component';

describe('AllrestaurantOrdersComponent', () => {
  let component: AllrestaurantOrdersComponent;
  let fixture: ComponentFixture<AllrestaurantOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllrestaurantOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllrestaurantOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
