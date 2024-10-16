import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhistoricalOrdersComponent } from './allhistorical-orders.component';

describe('AllhistoricalOrdersComponent', () => {
  let component: AllhistoricalOrdersComponent;
  let fixture: ComponentFixture<AllhistoricalOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllhistoricalOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllhistoricalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
