import {Component} from '@angular/core';
import {
  HotelReservationModalComponent
} from '../../components/hotel-reservation-modal/hotel-reservation-modal.component';

@Component({
  selector: 'app-email-template',
  imports: [
    HotelReservationModalComponent
  ],
  templateUrl: './email-template.component.html',
  styleUrl: './email-template.component.css'
})
export class EmailTemplateComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
