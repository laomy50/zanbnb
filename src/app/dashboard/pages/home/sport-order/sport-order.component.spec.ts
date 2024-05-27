import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportOrderComponent } from './sport-order.component';

describe('SportOrderComponent', () => {
  let component: SportOrderComponent;
  let fixture: ComponentFixture<SportOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
