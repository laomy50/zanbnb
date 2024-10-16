import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltripsOrdersComponent } from './alltrips-orders.component';

describe('AlltripsOrdersComponent', () => {
  let component: AlltripsOrdersComponent;
  let fixture: ComponentFixture<AlltripsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlltripsOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlltripsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
