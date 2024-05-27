import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOrderComponent } from './hotel-order.component';

describe('HotelOrderComponent', () => {
  let component: HotelOrderComponent;
  let fixture: ComponentFixture<HotelOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
