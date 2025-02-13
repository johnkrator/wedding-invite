import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmYourReservationModalComponent } from './confirm-your-reservation-modal.component';

describe('ConfirmYourReservationModalComponent', () => {
  let component: ConfirmYourReservationModalComponent;
  let fixture: ComponentFixture<ConfirmYourReservationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmYourReservationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmYourReservationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
