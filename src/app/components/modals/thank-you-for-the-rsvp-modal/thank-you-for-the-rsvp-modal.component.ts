import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-you-for-the-rsvp-modal',
  standalone: true,
  templateUrl: './thank-you-for-the-rsvp-modal.component.html',
  styleUrl: './thank-you-for-the-rsvp-modal.component.css',
})
export class ThankYouForTheRsvpModalComponent {
  hotelReservation: string = '';
  dialogRef = inject(MatDialogRef<ThankYouForTheRsvpModalComponent>);

  onHotelReservationChange(value: string) {
    this.hotelReservation = value;
    if (value === 'yes') {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(false);
    }
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }
}
