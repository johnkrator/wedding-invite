import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationModalComponent } from './hotel-reservation-modal.component';

describe('HotelReservationModalComponent', () => {
  let component: HotelReservationModalComponent;
  let fixture: ComponentFixture<HotelReservationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelReservationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelReservationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
