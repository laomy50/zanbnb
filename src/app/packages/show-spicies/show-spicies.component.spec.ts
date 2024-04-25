import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpiciesComponent } from './show-spicies.component';

describe('ShowSpiciesComponent', () => {
  let component: ShowSpiciesComponent;
  let fixture: ComponentFixture<ShowSpiciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowSpiciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSpiciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
