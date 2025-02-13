import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ConfirmYourReservationModalComponent
} from '../confirm-your-reservation-modal/confirm-your-reservation-modal.component';

@Component({
  selector: 'app-hotel-reservation-modal',
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    ConfirmYourReservationModalComponent
  ],
  templateUrl: './hotel-reservation-modal.component.html',
  styleUrl: './hotel-reservation-modal.component.css'
})
export class HotelReservationModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  showConfirmationModal = false;

  onClose() {
    this.closeModal.emit();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }

  onSubmit() {
    this.showConfirmationModal = true;
  }

  onConfirmationClose() {
    this.showConfirmationModal = false;
  }
}
