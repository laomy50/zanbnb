import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsListComponent } from './trips-list.component';

describe('TripsListComponent', () => {
  let component: TripsListComponent;
  let fixture: ComponentFixture<TripsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
