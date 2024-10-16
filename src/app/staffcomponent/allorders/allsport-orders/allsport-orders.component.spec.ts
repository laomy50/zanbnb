import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsportOrdersComponent } from './allsport-orders.component';

describe('AllsportOrdersComponent', () => {
  let component: AllsportOrdersComponent;
  let fixture: ComponentFixture<AllsportOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllsportOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllsportOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
