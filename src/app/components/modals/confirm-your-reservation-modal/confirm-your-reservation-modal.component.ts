import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {
  YouHaveAReservationModalComponent
} from '../../you-have-a-reservation-modal/you-have-a-reservation-modal.component';

@Component({
  selector: 'app-confirm-your-reservation-modal',
  imports: [
    FormsModule,
    NgIf,
    YouHaveAReservationModalComponent,
    YouHaveAReservationModalComponent
  ],
  templateUrl: './confirm-your-reservation-modal.component.html',
  styleUrl: './confirm-your-reservation-modal.component.css'
})
export class ConfirmYourReservationModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  showReservationSuccessModal = false;

  onClose() {
    this.closeModal.emit();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }

  onPaymentConfirm() {
    this.showReservationSuccessModal = true;
    this.isOpen = false; // Close the confirmation modal
  }

  onReservationSuccessClose() {
    this.showReservationSuccessModal = false;
    this.closeModal.emit(); // Close all modals
  }
}
