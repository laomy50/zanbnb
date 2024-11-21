import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshoporderComponent } from './myshoporder.component';

describe('MyshoporderComponent', () => {
  let component: MyshoporderComponent;
  let fixture: ComponentFixture<MyshoporderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyshoporderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyshoporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
