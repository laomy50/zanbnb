import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppComponent } from './show-shopp.component';

describe('ShowShoppComponent', () => {
  let component: ShowShoppComponent;
  let fixture: ComponentFixture<ShowShoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowShoppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowShoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
