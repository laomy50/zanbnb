import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSportsComponent } from './show-sports.component';

describe('ShowSportsComponent', () => {
  let component: ShowSportsComponent;
  let fixture: ComponentFixture<ShowSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowSportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
