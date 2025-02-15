import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-you-have-a-reservation-modal',
  templateUrl: './you-have-a-reservation-modal.component.html',
  styleUrl: './you-have-a-reservation-modal.component.css',
})
export class YouHaveAReservationModalComponent {
  dialog = inject(MatDialog);
  onClose() {
    this.dialog.closeAll();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }
}
