import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppComponent } from './shopp.component';

describe('ShoppComponent', () => {
  let component: ShoppComponent;
  let fixture: ComponentFixture<ShoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
