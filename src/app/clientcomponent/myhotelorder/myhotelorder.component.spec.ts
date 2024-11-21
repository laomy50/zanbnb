import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhotelorderComponent } from './myhotelorder.component';

describe('MyhotelorderComponent', () => {
  let component: MyhotelorderComponent;
  let fixture: ComponentFixture<MyhotelorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyhotelorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyhotelorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
