import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTransportsComponent } from './show-transports.component';

describe('ShowTransportsComponent', () => {
  let component: ShowTransportsComponent;
  let fixture: ComponentFixture<ShowTransportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowTransportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTransportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
