import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyspiceorderComponent } from './myspiceorder.component';

describe('MyspiceorderComponent', () => {
  let component: MyspiceorderComponent;
  let fixture: ComponentFixture<MyspiceorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyspiceorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyspiceorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
