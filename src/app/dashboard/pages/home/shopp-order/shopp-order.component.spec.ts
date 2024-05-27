import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppOrderComponent } from './shopp-order.component';

describe('ShoppOrderComponent', () => {
  let component: ShoppOrderComponent;
  let fixture: ComponentFixture<ShoppOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
