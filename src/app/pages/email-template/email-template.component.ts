import { Component, inject } from '@angular/core';
import { HotelReservationModalComponent } from '../../components/modals/hotel-reservation-modal/hotel-reservation-modal.component';
import { RouterLink } from '@angular/router';
import { ThankYouForTheRsvpModalComponent } from '../../components/modals/thank-you-for-the-rsvp-modal/thank-you-for-the-rsvp-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-email-template',
  imports: [RouterLink],
  templateUrl: './email-template.component.html',
  styleUrl: './email-template.component.css',
})
export class EmailTemplateComponent {
  isModalOpen = false;
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef<HotelReservationModalComponent>);

  openModal() {
    this.dialog.open(HotelReservationModalComponent, {
      width: '500px',
      maxWidth: '90vw',
      maxHeight: '98vh',
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
