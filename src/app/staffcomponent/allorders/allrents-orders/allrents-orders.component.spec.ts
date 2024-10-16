import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrentsOrdersComponent } from './allrents-orders.component';

describe('AllrentsOrdersComponent', () => {
  let component: AllrentsOrdersComponent;
  let fixture: ComponentFixture<AllrentsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllrentsOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllrentsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
