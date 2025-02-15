import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YouHaveAReservationModalComponent } from '../../you-have-a-reservation-modal/you-have-a-reservation-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-your-reservation-modal',
  imports: [FormsModule],
  templateUrl: './confirm-your-reservation-modal.component.html',
  styleUrl: './confirm-your-reservation-modal.component.css',
})
export class ConfirmYourReservationModalComponent {
  dialog = inject(MatDialog);
  dialogConfirmRef = inject(MatDialogRef<ConfirmYourReservationModalComponent>);
  dialogYHRRef = inject(MatDialogRef<YouHaveAReservationModalComponent>);

  onClose() {
    this.dialogConfirmRef.close();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }

  onPaymentConfirm() {
    this.dialogConfirmRef.close();
    this.dialog.open(YouHaveAReservationModalComponent, {
      width: '700px',
      maxWidth: '90vw',
      maxHeight: '98vh',
      closeOnNavigation: true,
      disableClose: false,
    });
  }

  onReservationSuccessClose() {
    this.dialogYHRRef.close();
    this.dialog.closeAll();
  }
}
