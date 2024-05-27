import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalOrderComponent } from './historical-order.component';

describe('HistoricalOrderComponent', () => {
  let component: HistoricalOrderComponent;
  let fixture: ComponentFixture<HistoricalOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricalOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
