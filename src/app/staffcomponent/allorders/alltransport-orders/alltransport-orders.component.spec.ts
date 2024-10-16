import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltransportOrdersComponent } from './alltransport-orders.component';

describe('AlltransportOrdersComponent', () => {
  let component: AlltransportOrdersComponent;
  let fixture: ComponentFixture<AlltransportOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlltransportOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlltransportOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
