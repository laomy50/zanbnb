import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceListComponent } from './spice-list.component';

describe('SpiceListComponent', () => {
  let component: SpiceListComponent;
  let fixture: ComponentFixture<SpiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
