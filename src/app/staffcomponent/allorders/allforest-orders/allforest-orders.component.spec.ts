import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllforestOrdersComponent } from './allforest-orders.component';

describe('AllforestOrdersComponent', () => {
  let component: AllforestOrdersComponent;
  let fixture: ComponentFixture<AllforestOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllforestOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllforestOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
