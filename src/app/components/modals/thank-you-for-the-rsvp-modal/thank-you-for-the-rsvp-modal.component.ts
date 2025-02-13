import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {HotelReservationModalComponent} from '../hotel-reservation-modal/hotel-reservation-modal.component';

@Component({
  selector: 'app-thank-you-for-the-rsvp-modal',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    HotelReservationModalComponent
  ],
  templateUrl: './thank-you-for-the-rsvp-modal.component.html',
  styleUrl: './thank-you-for-the-rsvp-modal.component.css'
})
export class ThankYouForTheRsvpModalComponent {
  hotelReservation: string = '';
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  isHotelModalOpen: boolean = false;

  onHotelReservationChange(value: string) {
    this.hotelReservation = value;
    if (value === 'yes') {
      this.isHotelModalOpen = true;
    }
  }

  onCloseHotelModal() {
    this.isHotelModalOpen = false;
  }

  onClose() {
    this.closeModal.emit();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }
}
