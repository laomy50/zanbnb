import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBeachesComponent } from './show-beaches.component';

describe('ShowBeachesComponent', () => {
  let component: ShowBeachesComponent;
  let fixture: ComponentFixture<ShowBeachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowBeachesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowBeachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
