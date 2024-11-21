import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrentsorderComponent } from './myrentsorder.component';

describe('MyrentsorderComponent', () => {
  let component: MyrentsorderComponent;
  let fixture: ComponentFixture<MyrentsorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyrentsorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyrentsorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
