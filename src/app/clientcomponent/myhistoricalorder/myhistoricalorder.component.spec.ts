import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhistoricalorderComponent } from './myhistoricalorder.component';

describe('MyhistoricalorderComponent', () => {
  let component: MyhistoricalorderComponent;
  let fixture: ComponentFixture<MyhistoricalorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyhistoricalorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyhistoricalorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
