import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachOrderComponent } from './beach-order.component';

describe('BeachOrderComponent', () => {
  let component: BeachOrderComponent;
  let fixture: ComponentFixture<BeachOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeachOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeachOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
