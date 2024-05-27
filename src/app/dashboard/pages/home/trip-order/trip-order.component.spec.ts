import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOrderComponent } from './trip-order.component';

describe('TripOrderComponent', () => {
  let component: TripOrderComponent;
  let fixture: ComponentFixture<TripOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
