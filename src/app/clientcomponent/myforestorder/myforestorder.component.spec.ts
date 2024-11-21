import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyforestorderComponent } from './myforestorder.component';

describe('MyforestorderComponent', () => {
  let component: MyforestorderComponent;
  let fixture: ComponentFixture<MyforestorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyforestorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyforestorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
