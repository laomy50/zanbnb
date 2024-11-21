import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrestaurantorderComponent } from './myrestaurantorder.component';

describe('MyrestaurantorderComponent', () => {
  let component: MyrestaurantorderComponent;
  let fixture: ComponentFixture<MyrestaurantorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyrestaurantorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyrestaurantorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
