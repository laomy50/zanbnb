import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybeachorderComponent } from './mybeachorder.component';

describe('MybeachorderComponent', () => {
  let component: MybeachorderComponent;
  let fixture: ComponentFixture<MybeachorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MybeachorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MybeachorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
