import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytriporderComponent } from './mytriporder.component';

describe('MytriporderComponent', () => {
  let component: MytriporderComponent;
  let fixture: ComponentFixture<MytriporderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MytriporderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MytriporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
