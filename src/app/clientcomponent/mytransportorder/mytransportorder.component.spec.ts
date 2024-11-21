import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytransportorderComponent } from './mytransportorder.component';

describe('MytransportorderComponent', () => {
  let component: MytransportorderComponent;
  let fixture: ComponentFixture<MytransportorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MytransportorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MytransportorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
