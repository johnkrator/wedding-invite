import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouHaveAReservationModalComponent } from './you-have-a-reservation-modal.component';

describe('YouHaveAReservationModalComponent', () => {
  let component: YouHaveAReservationModalComponent;
  let fixture: ComponentFixture<YouHaveAReservationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouHaveAReservationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouHaveAReservationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
