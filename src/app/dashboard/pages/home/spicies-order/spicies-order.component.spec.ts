import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiciesOrderComponent } from './spicies-order.component';

describe('SpiciesOrderComponent', () => {
  let component: SpiciesOrderComponent;
  let fixture: ComponentFixture<SpiciesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiciesOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpiciesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
