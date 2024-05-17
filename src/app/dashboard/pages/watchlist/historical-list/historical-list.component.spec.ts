import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalListComponent } from './historical-list.component';

describe('HistoricalListComponent', () => {
  let component: HistoricalListComponent;
  let fixture: ComponentFixture<HistoricalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
