import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRentsComponent } from './show-rents.component';

describe('ShowRentsComponent', () => {
  let component: ShowRentsComponent;
  let fixture: ComponentFixture<ShowRentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowRentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
