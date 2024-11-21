import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysportorderComponent } from './mysportorder.component';

describe('MysportorderComponent', () => {
  let component: MysportorderComponent;
  let fixture: ComponentFixture<MysportorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MysportorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MysportorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
