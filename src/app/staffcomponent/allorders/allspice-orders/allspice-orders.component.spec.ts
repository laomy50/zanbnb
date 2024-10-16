import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllspiceOrdersComponent } from './allspice-orders.component';

describe('AllspiceOrdersComponent', () => {
  let component: AllspiceOrdersComponent;
  let fixture: ComponentFixture<AllspiceOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllspiceOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllspiceOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
