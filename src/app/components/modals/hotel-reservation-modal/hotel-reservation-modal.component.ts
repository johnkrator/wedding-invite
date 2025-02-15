import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmYourReservationModalComponent } from '../confirm-your-reservation-modal/confirm-your-reservation-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hotel-reservation-modal',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './hotel-reservation-modal.component.html',
  styleUrl: './hotel-reservation-modal.component.css',
})
export class HotelReservationModalComponent {
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef<ConfirmYourReservationModalComponent>);

  onClose() {
    this.dialogRef.close();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }

  onSubmit() {
    this.dialog.open(ConfirmYourReservationModalComponent, {
      width: '700px',
      maxWidth: '90vw',
      maxHeight: '98vh',
    });
  }

  onConfirmationClose() {
    this.dialogRef.close();
  }
}
