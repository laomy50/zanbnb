import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestOrderComponent } from './forest-order.component';

describe('ForestOrderComponent', () => {
  let component: ForestOrderComponent;
  let fixture: ComponentFixture<ForestOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForestOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForestOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
