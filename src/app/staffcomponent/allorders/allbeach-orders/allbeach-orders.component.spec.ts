import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbeachOrdersComponent } from './allbeach-orders.component';

describe('AllbeachOrdersComponent', () => {
  let component: AllbeachOrdersComponent;
  let fixture: ComponentFixture<AllbeachOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllbeachOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllbeachOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
