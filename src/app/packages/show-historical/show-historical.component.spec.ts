import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHistoricalComponent } from './show-historical.component';

describe('ShowHistoricalComponent', () => {
  let component: ShowHistoricalComponent;
  let fixture: ComponentFixture<ShowHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowHistoricalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
