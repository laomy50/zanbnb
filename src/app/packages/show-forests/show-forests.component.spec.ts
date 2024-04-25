import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForestsComponent } from './show-forests.component';

describe('ShowForestsComponent', () => {
  let component: ShowForestsComponent;
  let fixture: ComponentFixture<ShowForestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowForestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowForestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
